const express = require("express");
const pool = require("../config");
const path = require("path");
const multer = require("multer");
const { json } = require("express");
const fs = require("fs");
const Joi = require("joi");
const router = express.Router();
let alert = require("alert");
let md5 = require("md5");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./static/fileSubject");
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

router.post("/checksyntax", async function (req, res, next) {
  const allFileContents = fs.readFileSync(
    "./static/filejava/Appointment.java",
    "utf-8"
  );
  let leftcurlybracket = 0;
  let rightcurlybracket = 0;
  let leftparenthesis = 0;
  let rigthparenthesis = 0;
  let semicolon = 0;
  for (let i = 0; i < allFileContents.length; i++) {
    if (allFileContents[i] == "{") {
      leftcurlybracket += 1;
    } else if (allFileContents[i] == "}") {
      rightcurlybracket += 1;
    } else if (allFileContents[i] == "}") {
      rightcurlybracket += 1;
    } else if (allFileContents[i] == "(") {
      leftparenthesis += 1;
    } else if (allFileContents[i] == ")") {
      rigthparenthesis += 1;
    } else if (allFileContents[i] == ";") {
      semicolon += 1;
    }
  }
  let checksemicolon = 0;
  let check = "true";
  allFileContents.split(/\r?\n/).forEach((line) => {
    if (
      line.indexOf("{") == -1 &&
      line.indexOf("}") == -1 &&
      (line.indexOf("(") == -1 ||
        line.indexOf(")") == -1 ||
        line.indexOf(";") >= 0)
    ) {
      checksemicolon += 1;
    }
    // console.log(`${line}`);
  });
  console.log(
    leftcurlybracket,
    rightcurlybracket,
    leftparenthesis,
    rigthparenthesis,
    semicolon,
    checksemicolon
  );
  if (
    leftcurlybracket != rightcurlybracket ||
    leftparenthesis != rigthparenthesis ||
    checksemicolon != semicolon
  ) {
    check = "error";
  }
  console.log(
    leftcurlybracket != rightcurlybracket ||
      leftparenthesis != rigthparenthesis ||
      checksemicolon != semicolon
  );
  if (check == "true") {
    res.json("Syntax Ok");
  } else {
    res.json("Syntax error");
  }
  //   console.log("readFile called");
});

module.exports = router;
