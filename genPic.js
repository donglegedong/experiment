var page = require('webpage').create();
page.open('http://localhost:3000', function() {
    setTimeout(function() {
        page.render('demo1.png');
        // phantom.exit();
    },100);
    setTimeout(function() {
        page.render('demo2.png');
        // phantom.exit();
    },500);
    setTimeout(function() {
        page.render('demo3.png');
        phantom.exit();
    },1000);   
});