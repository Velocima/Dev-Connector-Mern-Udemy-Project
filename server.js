const express = require('express');
const connectToDB = require('./config/db');

const app = express();
connectToDB();

app.get('/', (req, res) => {
    res.send('API Running (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Server is listening at port ${PORT}!`)});