const express = require("express")
const router = express.Router();

app.get('/', (req, res) => {
    res.json({usuarios: []});
});
module.exports = router;