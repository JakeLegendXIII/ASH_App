(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.addEventListener('backbutton', onDeviceBackButton, false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        //var element = document.getElementById("deviceready");
        //element.innerHTML = 'Device Ready';
        //element.className += ' ready';
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function onDeviceBackButton(args) {
        
        //if (window.location === "#/") {
            navigator.notification.confirm('Do you want to exit the application?',
            onConfirm, 'Exit', 'Yes, No');
        //} else {
            //console.log($location.path());
            //window.location = "#/";
            //console.log($location.path());
        //}
    }

    function onConfirm(buttonIndex) {
        if (buttonIndex === 1) {
            navigator.app.exitApp();
        }
    }

} )();