const express = require('express');
const app = express();

const port = 8000;

app.get('/',(req, res)=>{
	res.set('Content-Type', 'text/html');
	res.send('hello world');
});

app.listen(port, ()=>{
	console.log('this server is listening to port' +port);
});