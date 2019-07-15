const express = require('express')
const app = express()
const port = 3000


// app.get('/', (req, res) => res.send('Hello World!'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/stylesheet01', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/stylesheet02', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet02.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/stylesheet03', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet03.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/stylesheet04', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/stylesheet04.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/nostylesheet', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/nostylesheet.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))