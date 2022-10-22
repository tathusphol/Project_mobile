const express = require("express");
const pool = require("../config");
const path = require("path");
const multer = require("multer");
const { json } = require("express");
const fs = require("fs");
const Joi = require("joi");
const router = express.Router();
let alert = require("alert");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./static/profiles");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.originalname.split(path.extname(file.originalname))[0] +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.get("/getUser", async function (req, res, next) {
  try {
    const [allUser, field] = await pool.query("SELECT * FROM user");
    res.json(allUser);
  } catch (error) {
    res.json(error);
  }
});

router.get("/getUserId", async function (req, res, next) {
  try {
    let email = req.body.email;
    const [user, field] = await pool.query(
      "SELECT * FROM user WHERE email = ?",
      [email]
    );
    res.json(user[0]);
  } catch (error) {
    res.json(error);
  }
});

router.post("/editProfile", upload.single("profile"), async function (req, res, next) {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    let profile = req.file;
    let u_id = req.body.id;
    let path = profile.path.substring(6);
    const [getOldImg, fields] = await pool.query(
        "SELECT img from user WHERE user_id = ?",
        [u_id]
    )
    const [porfilepath, field] = await pool.query(
      "UPDATE user SET img = ? WHERE user_id = ?",
      [path, u_id]
    );
    conn.commit();
    res.json("success");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
