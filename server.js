const express = require('express');
const mongoose = require('mongoose');

const mongodbUrl = "mongodb+srv://seb:test@cluster0.loi4tec.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

mongoose.connect(mongodbUrl, {
    dbName: "form_project",
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connected ...");
}).catch((err) => {
    console.log(err);
});

app.use('/api/users', require('./routes/users'));
app.use('/api/event', require('./routes/event'));

const port  = 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
