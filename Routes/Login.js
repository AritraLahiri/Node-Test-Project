const express = require("express");
const router = express.Router();
router.get("/login", (req, res, next) => {
  res.send(
    "<form action ='/login' method='POST'><input type='text' placeholder='Name' name='userName'/> <button type='submit'>Login</button></form>"
  );
});
router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <form action ='/' method='GET'>
    <input type='text' placeholder='Message' name='msg'/>
    <button type='submit'>Login</button>
    <script>window.localStorage.setItem("UserName", ${JSON.stringify(
      req.body.userName
    )});</script>
    </form>
  `);
});

module.exports = router;
