const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
let ejsmate = require('ejs-mate');
let seedDB = require('./seed');
let postRoutes = require('./routes/postRoutes');
let methodOverride = require('method-override');

var app = express();

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://127.0.0.1:27017/myPostApp`)
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err));

app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(postRoutes);

// seedDB();    // seed DB only once - dummy values are created once only

const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});