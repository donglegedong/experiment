const React = require('react');
const ReactDOM = require('react-dom');

const showConfig = require('../showConfig');

const App = require('./container/' + showConfig.showContainer + '/index');
ReactDOM.render(<App />, document.getElementById('content'));