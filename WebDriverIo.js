var browser = require('webdriverio');
var assert = require('assert');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

browser
    .remote(options)
    .init()
    .get("http://www.google.com")
	.elementById('q')
	.sendKeys('webdriver.io')
	.elementById('btnG')
	.click()
	.getUrl().then(function(url) {
        assert url === "http://webdriver.io/"
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
