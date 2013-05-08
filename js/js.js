$(document).ready(function() {
	$("#scanButton").click(function() {
		scan();
	});
});


function scan() {
    window.plugins.barcodeScanner.scan(
        function(result) {
            $.mobile.changePage( result.text );
            playAudio('http://studentfolders.student.cascadia.edu/bit271/tomchristilaw/masterOfPuppets.mp3');


        /*alert("Scanned Code: " + result.text 
                + ". Format: " + result.format
                + ". Cancelled: " + result.cancelled);*/
    }, function(error) {
        alert("Scan failed: " + error);
    });
}

// Audio player
//
var my_media = null;
var mediaTimer = null;

// Play audio
//
function playAudio(src) {
    // Create Media object from src
    my_media = new Media(src, onSuccess, onError);

    // Play audio
    my_media.play();

    // Update my_media position every second
    if (mediaTimer == null) {
        mediaTimer = setInterval(function() {
            // get my_media position
            my_media.getCurrentPosition(
                // success callback
                function(position) {
                    if (position > -1) {
                        setAudioPosition((position) + " sec");
                    }
                },
                // error callback
                function(e) {
                    console.log("Error getting pos=" + e);
                    setAudioPosition("Error: " + e);
                }
            );
        }, 1000);
    }
}

// Pause audio
// 
function pauseAudio() {
    if (my_media) {
        my_media.pause();
    }
}

// Stop audio
// 
function stopAudio() {
    if (my_media) {
        my_media.stop();
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
}

// onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback 
//
function onError(error) {
    alert('code: '    + error.code    + '\n' + 
          'message: ' + error.message + '\n');
}

// Set audio position
// 
function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
}