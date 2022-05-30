const mongoose = require('mongoose');
const express = require('express');
const personsRoutes=require('./routes/persons');

mongoose.Promise = global.Promise;
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personsRoutes);

mongoose.connect(
    `mongodb+srv://OscarC:cherry12345@cluster0.5id4px6.mongodb.net/?retryWrites=true&w=majority`,
    {
        useUnifiedTopology:true,
        useNewUrlParser: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.listen(3000);