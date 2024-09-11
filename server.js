import process from "process";
import express from 'express';
import bodyParser from 'body-parser';

const hostname = '127.0.0.1';
const port = 3000;

const rootFileSystem = process.cwd();

const app = express();

app.use(bodyParser.json());

app.use(express.static('publicResources'));
//app.use('/itemImages', express.static('itemImages'));

app.get('/', (req, res) => {
  res.sendFile(rootFileSystem + "/publicResources/html/main.html");
});
app.get('/main.html', (req, res) => {
  res.sendFile(rootFileSystem + "/publicResources/html/main.html");
});

app.get('/marketplace.js', (req, res) => {
  res.sendFile(rootFileSystem + "/publicResources/js/marketplace.js");
});

app.get('/style.css', (req, res) => {
  res.sendFile(rootFileSystem + "/publicResources/css/style.css");
});

app.get('/chosen/chosen.css', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/chosen.css");
});

app.get('/chosen/chosen-sprite.png', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/chosen-sprite.png");
});

app.get('/chosen/docsupport/style.css', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/docsupport/style.css");
});

app.get('/chosen/docsupport/jquery-3.2.1.min.js', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/docsupport/jquery-3.2.1.min.js");
});

app.get('/chosen/chosen.jquery.js', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/chosen.jquery.js");
});

app.get('/chosen/docsupport/prism.js', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/docsupport/prism.js");
});

app.get('/chosen/docsupport/prism.css', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/docsupport/prism.css");
});

app.get('/chosen/docsupport/init.js', (req, res) => {
  res.sendFile(rootFileSystem + "/chosen/docsupport/init.js");
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

