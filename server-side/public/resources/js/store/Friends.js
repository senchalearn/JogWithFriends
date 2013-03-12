Ext.define('JWF.store.Friends', {
    extend: 'Ext.data.Store',

    requires: [
        'JWF.model.Friend'
    ],

    config: {
        model: 'JWF.model.Friend',
        storeId: 'Friends',
        proxy: {
            type: 'ajax',
            url: 'friends'
        }
    }
});