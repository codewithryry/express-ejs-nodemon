const express = require('express');
const route = require('./route/route');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', route); 
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
