const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('static'));

app.use((req, res, next) => {
	console.log(`Поступил запрос`, req.method, req.url);
	next();
})

// корневая страница
app.get('/', (req, res) => {
	res.sendFile('static/index.html');
});
// Страница обо мне
app.get('/about', (req, res) => {
	res.send(`<h1>Страница обо мне!</h1>
			<a href="/">Перейти на главную страницу</a>`);
});
const port = 3000;

app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
});