const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')



app.use(bodyParser.json());

app.use(cors({origin:"*"}))

app.post('/movie/create', require('./create.js'));
app.post('/movie/read', require('./read.js'));
app.post('/movie/update', require('./update.js'));
app.post('/movie/delete', require('./delete.js'));

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log('Server is running on port', port)
})