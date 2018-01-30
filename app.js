const express = require('express');
const app = express();


app.get("/", (req, res)=>{
	res.status(200).send("Teste APP");

});

app.listen(3000, ()=>{
	console.log("Server ativo");
});