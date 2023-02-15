const path = require("path")


module.exports = function (app) {
    //notes page
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    });
//index page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
};