/**
 * 拉取后台数据
 * @param url {string}
 * @param callback {function}
 */
var EventEmitter = require('events').EventEmitter;
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Store_MessageList extends EventEmitter {
    constructor() {
        super();
        this.allData = null;
    }

    getAllData(url,callback) {
        var self = this;
        fetch(
            url
        )
        .then(function(res) {
            if (res.ok) {
                res.json().then(function(data) {
                    self.allData = data;
                    callback(self.allData);
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", res.status);
            }
        }, function(e) {
            console.log("Fetch failed!", e);
        });
    }
}

module.exports = new Store_MessageList();