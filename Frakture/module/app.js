const express = require('express');
const app = express();
const port = 8080;

app.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});

app.get("/notes", (req, res) => {
    res.send("This should be the notes");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
