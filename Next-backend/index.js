const express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 4000;
const server = express();

// Use the CORS middleware
server.use(cors());

server.get("/about", (req, res) => {
    let pwd = "13";
    if (pwd == "123") {
        res.send("this is the about page");
    } else {
        res.send("unauthorized person");
    }
});

server.get("/contact", (req, res) => {
    res.send("this is the contact page");
});

server.get("/fetch-activity", async (req, res) => {
    try {
        const response = await axios.get("https://www.boredapi.com/api/activity");
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error fetching activity");
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
