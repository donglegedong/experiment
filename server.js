var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var LIST_FILE = path.join(__dirname, 'src/data/data3.json'),
    CHILD_FILE = path.join(__dirname, 'src/data/message.json');
app.set('port', (process.env.PORT || 3000));

app.use('/static', express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    // res.render('/src/static/index.html');
    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html')
        // 读取首页内容，返回给客户端呈现
        fs.readFile('./src/index.html','utf-8',function(err, data) {
            if(err) throw err;
            res.setHeader('Content-Type', 'text/html')
            res.write(data);
            res.end();
        });
    }
});
app.get('/api/list', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  fs.readFile(LIST_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});
app.get('/api/childList', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  fs.readFile(CHILD_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});