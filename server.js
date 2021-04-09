// Dependencies
const express = require(`express`);
const cors = require(`cors`);
const db = require(`./models`);

// Port environment variables
const PORT = process.env.PORT || 9999;

// Server instance
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Lovely greeting for anyone who tries to visit the deployed server
app.get(`/`, (req, res) => {
    res.send(`I didn't hire you to stand around and spray, now get to work!`)
})

// Start server
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
});