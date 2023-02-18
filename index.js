const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend/dist'));



const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.sendFile('./frontend/dist/index.html', {root: './'});
})

app.get('/todos', (req, res) => {
	res.send({todos:['to', 'do']});
});

app.get('/todos/:todoID', (req, res) => {
	console.log(req.params.todoID)
	res.send({todo:'done'})
})

app.post('/todos', (req, res) => {
	console.log(req.body)
	res.send({got:'em'})
})


app.listen(PORT, () =>
	console.log(`Raphael's app is listening on port ${PORT}!`)
);
