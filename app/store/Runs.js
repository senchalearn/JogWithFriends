Ext.define('JWF.store.Runs', {
    extend: 'Ext.data.Store',

    requires: [
        'JWF.model.Run'
    ],

    config: {
        model: 'JWF.model.Run',
        storeId: 'Runs',
        proxy: {
            type: 'ajax',
            url: 'runs'
        }
    }
});