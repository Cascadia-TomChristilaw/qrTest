/*$(document).ready(function() {
	$("#scanButton").click(function() {
		scan( function (result) { 
			alert("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled); 
		});
	});
});
*/

$(document).ready(function() {
	$("#scanButton").click(function() {
		scan( function (result) { 
			$('#home div[data-role="content"]').append("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled); 
		});
	});
});


function scan(successFunction) {
    window.plugins.barcodeScanner.scan(function (result) {
          if (!result.cancelled) {
            // Successfully scanned a bar code
            if (result.format == "CODE_128") {
              loadCardData(result.text, successFunction);
            } else {
              $('#typeInPopup #hint').html("Sorry, invalid format");
              $('#typeInPopup').popup('open', { transition: 'pop'});
            }
          }
        }, function (error) {
          alert("Scanning failed: " + error);
        }
    );
}