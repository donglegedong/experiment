var path = require('path');
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var showConfig = require('./showConfig');
var ShowPage = require('./src/buildpage/' + showConfig.showPage);
var cssDir = 'http://localhost:3000/static/css/' + showConfig.showCss + '.css';
// var CnblogPage = require('./src/buildpage/cnblogPage');
// var ChildBox = require('./src/buildpage/childBox');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

// var CHILD_FILE = path.join(__dirname, 'src/data/message.json');

// productBox实例
var showPage = React.createFactory(ShowPage);
// var cnblogPage = React.createFactory(CnblogPage);
// var cssDir = 'http://localhost:3000/static/css/cnblog.css';

app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html')
        ShowPage.fetchData(function (datas) {
            var waresPagedList = datas.waresPagedList;  
            var showList = waresPagedList;
            var reactHtml = ReactDOMServer.renderToString(showPage({showList: showList}));
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
                                <link rel="stylesheet" href='+ cssDir +'>\
                            </head>\
                            <body>\
                                <div id="content"><div>'+
                                    reactHtml+
                                '</div></div>\
                            </body>\
                            </html>';                    
            res.end(html);         
        });      
    }
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
