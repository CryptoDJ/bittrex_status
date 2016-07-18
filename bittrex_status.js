var page = require('webpage').create();  
page.open('https://bittrex.com/Status', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var p = page.evaluate(function () {
            return document.getElementsByTagName('html')[0].innerHTML
        });
	var fs = require('fs');
	var path = 'bittex_status.htm';
	var content = p;
	fs.write(path, content, 'w');
    }
    phantom.exit();
});