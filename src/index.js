
var ReactDOM = require('react-dom');
var React = require('react');
var LikeButton = require('./like-button.js');

const domContainer = document.querySelector('#app'); ReactDOM.render(React.createElement(LikeButton), domContainer);