Ext.define('JWF.view.Form', {
    extend: 'Ext.Panel',

    config: {
        id: 'newJogContainer',
        layout: {
            type: 'card'
        },
        scrollable: false,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'New Jog',
                items: [
                    {
                        xtype: 'button',
                        id: 'addRunBackBtn',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'button',
                        id: 'addFriendsBtn',
                        align: 'right',
                        hidden: true,
                        text: 'Add'
                    }
                ]
            },
            {
                xtype: 'container',
                padding: '15 15 15 15',
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'locationField',
                                placeHolder: 'Where?'
                            },
                            {
                                xtype: 'textfield',
                                id: 'distanceField',
                                placeHolder: 'How Many Miles?'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'component',
                                id: 'selectedFriends',
                                hidden: true
                            },
                            {
                                xtype: 'button',
                                id: 'addFriendsButton',
                                margin: 5,
                                ui: 'add-friends',
                                text: 'Add Friends'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        id: 'addRunButton',
                        ui: 'facebook',
                        text: 'Add Jog'
                    }
                ]
            },
            {
                xtype: 'list',
                id: 'friendsList',
                store: 'Friends',
                itemTpl: '{name}',
                mode: 'MULTI'
            }
        ]
    }
});