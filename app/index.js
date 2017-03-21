require('./main.css')
var $=require('jquery');
var moment=require('moment');
var sub=require('./sub');
var app=document.createElement('div');
app.innerHTML='<h1>Hello World!!!!</h1>';
app.appendChild(sub());
$('body').append('<p>Look at me! now is '+moment().format()+'</p>');
$('body').append(app);

//document.body.appendChild(app);