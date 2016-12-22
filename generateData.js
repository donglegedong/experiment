var Mock = require('mockjs');
var fs = require('fs');

var buildPath = './src/data/';
for(var i=20; i<200; i+=20){
    var data = [],
        dataStr = '';
    for(var j=0; j<i; j++){
        data.push(Mock.mock({Message: '@paragraph(2)'}));
    }
    dataStr = JSON.stringify(data);
    fs.writeFileSync(buildPath + 'data'+(i/20)+'.json', dataStr);
}
/*for(var i=0; i<5; i++){
    data.push(Mock.mock({Message: '@paragraph(2)'}));
}
data = JSON.stringify(data);
fs.writeFileSync(buildPath + 'data.json', data);*/