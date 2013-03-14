Ext.define('JWF.model.Run', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'location'
            },
            {
                name: 'friends'
            },
            {
                name: 'date',
                type: 'date'
            },
            {
                name: 'distance',
                type: 'int'
            },
            {
                name: 'profileId'
            },
            {
                name: 'name'
            }
        ]
    }
});