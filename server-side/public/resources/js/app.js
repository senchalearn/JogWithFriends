Ext.Loader.setConfig({
    enabled: true,
    paths: {
        JWF: '/resources/js'
    }
});

Ext.application({
    models: [
        'Run',
        'Friend'
    ],
    stores: [
        'Runs',
        'Friends'
    ],
    views: [
        'run.List',
        'NoFriends',
        'Main',
        'Login',
        'Form'
    ],
    icon: {
        '57': 'resources/icons/icon.png',
        '114': 'resources/icons/icon.png'
    },
    name: 'JWF',
    startupImage: {
        '320x460': 'resources/images/phone_startup.png'
    },
    controllers: [
        'Facebook',
        'Runs'
    ],

    launch: function() {
        this.facebookAppId = '362146057147121';

        if (this.facebookAppId === '') {
            Ext.create('Ext.Component', {
                fullscreen: true,
                padding: 20,
                html: [
                '<p>Please read the readme to set up this example locally.</p><br/>',
                '<p>For a live example, visit <a href="http://ju.mp/senchajwf">http://ju.mp/senchajwf</a></p>'
                ].join('')
            });
        }
    }

});
