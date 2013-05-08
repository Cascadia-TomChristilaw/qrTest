$(document).ready(function() {
	$("#scanButton").click(function() {
		scan();
	});
});


var scan = function() {
    window.plugins.barcodeScanner.scan(
        function(result) {
            window.location.href = result.text;


        /*alert("Scanned Code: " + result.text 
                + ". Format: " + result.format
                + ". Cancelled: " + result.cancelled);*/
    }, function(error) {
        alert("Scan failed: " + error);
    });
}
