const express = require('express');
const connectToDB = require('./config/db');

const app = express();

connectToDB();

app.get('/', (req, res) => {
    res.send('API Running (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
})

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Server is listening at port ${PORT}!`)});