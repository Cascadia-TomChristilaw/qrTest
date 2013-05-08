$(document).ready(function() {
	$("#scanButton").click(function() {
		scanner.scan( function (result) { 
			alert("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
			 }, function (error) { 
			 	alert("Scanning failed: " + error); 
		});
	});
});

var scanner = window.PhoneGap.require("cordova/plugin/BarcodeScanner");
