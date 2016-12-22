var EventEmitter = require('events').EventEmitter;
require('es6-promise').polyfill();
require('isomorphic-fetch');

class ContentData extends EventEmitter {
    constructor() {
        super();
    }          
    fetch(url) {
        var msg = '';
        var promise = new Promise(function(resolve,reject){
            fetch(
                url
            )
            .then(function(res) {
                if (res.ok) {
                    res.json().then(function(data) {
                        resolve(data);
                    });
                } else {
                    msg = "Looks like the response wasn't perfect, got status" + res.status;
                    reject(msg);
                }
            }, function(e) {
                msg = "Fetch failed!" + e;
                reject(msg);
            });
        });
        return promise;
    }
}
module.exports = new ContentData();