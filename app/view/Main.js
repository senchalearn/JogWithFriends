Ext.define('JWF.view.Main', {
    extend: 'Ext.Container',

    config: {
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                cls: [
                    'jogToolbar'
                ],
                docked: 'top',
                id: 'mainToolbar',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        cls: 'fbButton',
                        id: 'showFormButton',
                        iconCls: 'showFormBtn'
                    },
                    {
                        xtype: 'button',
                        cls: 'fbButton',
                        id: 'signout',
                        iconCls: 'signoutBtn'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        // Enable the Tap event on the profile picture in the toolbar, so we can show a logout button
        var meta = Ext.getCmp('signout');
        if (meta) {
            meta.element.on('tap', function(e) {
                meta.fireEvent('tap', meta, e);
            });
        }
    }
});