(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener('backbutton', onDeviceBackButtonIndex, false);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function onDeviceBackButtonIndex(args) {
        navigator.notification.confirm('Do you want to exit the application?',
        onConfirm, 'Exit', 'Yes, No');
    }

    function onConfirm(buttonIndex) {
        if (buttonIndex === 1) {
            navigator.app.exitApp();
        }
    }

} )();