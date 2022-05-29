const express = require('express');

const cors = require('cors');
const app = express();
var CorsOptions = {
	origin: "http://localhost:8080"
};

app.use(cors(CorsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
	res.json({name: 'jocelin kisenga'});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
	console.log(`server running at port ${PORT}`);
});