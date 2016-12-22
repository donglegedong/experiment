var path = require('path');
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var ProductBox = require('./src/buildpage/productBox');
// var ChildBox = require('./src/buildpage/childBox');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var CHILD_FILE = path.join(__dirname, 'src/data/message.json');

// productBox实例
var productBox = React.createFactory(ProductBox);

app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html')
        ProductBox.fetchData(function (datas) {
            var len = datas.length,
                messageListArr = [];
            for(var i=0; i<len; i++) {
                messageListArr[i] = datas[i].Message;
            }    
            fs.readFile(CHILD_FILE, function(err, datas) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                datas = JSON.parse(datas);
                console.log('fileDatas:', datas);  
                var len = datas.length,
                    childListArr = [];
                for(var i=0; i<len; i++) {
                    childListArr[i] = datas[i].Message;
                }
                var reactHtml = ReactDOMServer.renderToString(productBox({messageList: messageListArr, childList: childListArr}));
                console.log('messageList:', messageListArr);
                console.log('childList:', childListArr);
                var html = '<!doctype html>\n\
                            <html lang="zh-CN">\
                            <head>\
                                <meta charSet="UTF-8" />\
                                <meta name="keywords" content="" />\
                                <meta name="description" content="" />\
                                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />\
                                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />\
                                <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">\
                                <title>服务端渲染</title>\
                            </head>\
                            <body>\
                                <div id="content"><div>'+
                                    reactHtml+
                                '</div></div>\
                            </body>\
                            </html>';                    
                res.end(html);
            });          
        });      
    }
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
