const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  let data = fs.readFileSync("message.txt", { encoding: "utf8", flag: "r" });
  res.send(`
    <form action ='/' method='POST'>
    <h1 id='H1'></h1>
    <input type='text' placeholder='Message' name='msg'/>
    <button type='submit'>Send</button>
    <script>
     const h1 = document.getElementById("H1");
     h1.textContent =  window.localStorage.getItem("UserName")  + '${data}'
    </script>
    </form>
  `);
});
router.post("/", (req, res, next) => {
  fs.appendFile("message.txt", JSON.stringify(req.body.msg), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
  res.redirect("/");
});

module.exports = router;
