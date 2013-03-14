Ext.define('JWF.controller.Runs', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#addRunButton": {
                tap: 'addRun'
            },
            "#showFormButton": {
                tap: 'showForm'
            },
            "#addRunBackBtn": {
                tap: 'hideForm'
            },
            '#addFriendsBtn': {
                tap: 'addFriends'
            },
            '#addFriendsButton': {
                tap: 'showFriends'
            }
        }
    },

    addRun: function(button, e, options) {
        var distance = Ext.getCmp('distanceField').getValue(),
            location = Ext.getCmp('locationField').getValue(),
            caption = JWF.userData.first_name + ' ran ' + distance + ' miles',
            friends = [];

        // Get the friends
        var selection = Ext.getCmp('friendsList').getSelection();
        for (var i = 0; i < selection.length; i++) {
            friends.push(selection[i].get('name'));
        }

        if (location) {
            caption += ' in ' + location;
        }

        Ext.getCmp('runForm').setMasked({
            xtype: 'loadmask',
            message: 'Adding New Jog...'
        });

        Ext.Ajax.request({
            url: '/run',
            method: 'POST',
            params: {
                location: location,
                distance: distance,
                friends: friends.join(', ')
            },
            callback: this.onAddRun,
            scope: this
        });
    },

    showForm: function(button, e, options) {
        var friendStore = Ext.getStore('Friends');

        if (friendStore && friendStore.getCount() == 0) {
            friendStore.load();
        }

        if (!this.addRunForm) {
            this.addRunForm = Ext.create('JWF.view.Form', {
                id: 'runForm'
            });
        }
        Ext.Viewport.setActiveItem(this.addRunForm);
    },

    hideForm: function(button, e, options) {
        Ext.Viewport.setActiveItem(Ext.getCmp('main'));
        Ext.getCmp('runForm').hide();
        Ext.getCmp('friendsList').deselectAll();
        Ext.getCmp('selectedFriends').hide();
    },

    showFriends: function() {
        Ext.getCmp('addRunBackBtn').hide();
        Ext.getCmp('addFriendsBtn').show();

        Ext.getCmp('runForm').setActiveItem(Ext.getCmp('friendsList'));
    },

    init: function(application) {
        this.callParent();

        Ext.getStore('Runs').on('load', this.onRunsLoad);
    },

    onRunsLoad: function(store) {
        var main = Ext.getCmp('main'),
            runList = Ext.getCmp('runList'),
            noFriends = Ext.getCmp('noFriends');

        if (store.getCount()) {
            if (!runList) {
                runList = Ext.create('JWF.view.run.List', {
                    id: 'runList'
                });
            }
            main.setActiveItem(runList);
        } else {
            if (!noFriends) {
                noFriends = Ext.create('JWF.view.NoFriends', {
                    id: 'noFriends',
                    data: JWF.userData
                });
            }
            main.setActiveItem(noFriends);
        }
    },

    onAddRun: function(options, success, response) {
        Ext.getCmp('runForm').setMasked(false);
        this.hideForm();
        Ext.getStore('Runs').load();
    },

    addFriends: function() {
        Ext.getCmp('addRunBackBtn').show();
        Ext.getCmp('addFriendsBtn').hide();

        // Update the selected friends
        var form = Ext.getCmp('runForm'),
            friendsList = Ext.getCmp('friendsList'),
            friends = friendsList.getSelection(),
            names = [];

        for (var i = friends.length - 1; i >= 0; i--) {
            names.push(friends[i].get('name'));
        }

        if (names.length > 0) {
            Ext.getCmp('selectedFriends').setHtml(names.join(', '));
            Ext.getCmp('selectedFriends').show();
        } else {
            Ext.getCmp('selectedFriends').hide();
        }

        form.setActiveItem(0);
    }
});