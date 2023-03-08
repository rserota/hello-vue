const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend/dist'));



const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.sendFile('./frontend/dist/index.html', {root: './'});
})

app.post('/test', (req, res)=>{
	console.log('body? ', req.body)
	res.send({ok:'ok'})
})

app.listen(PORT, () =>
	console.log(`Raphael's app is listening on port ${PORT}!`)
);
