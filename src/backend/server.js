const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const fs = require('fs');
const multer = require("multer");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;


mongoose.connect("mongodb://0.0.0.0:27017/petshopdb", {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

})

app.use(logger);


app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/api/register'));
app.use('/auth', require('./routes/api/auth'));
app.use('/logout', require('./routes/api/logout'));
app.use('/dogs', require('./routes/api/dogs'));
app.use('/users', require('./routes/api/users'));
app.use('/img', require('./routes/api/imageAPI'));
app.use('/comments', require('./routes/api/comments'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});
app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});