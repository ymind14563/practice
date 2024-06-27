const express = require(`express`);
const app = express();
const PORT = 8080;

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);
app.use(`/static`, express.static(__dirname + `/static`));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const indexRouter = require(`./routes/user`);
app.use(`/`, indexRouter);

app.get(`*`, (req, res) => {
    res.render(`404`);
})

app.listen(PORT, () => {
    console.log(`${PORT} 포트 연결 성공`);
})