const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);
app.listen(80);

console.log("Running at Port 80");