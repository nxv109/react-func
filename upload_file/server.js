const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

// upload
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const files = req.files.upload;

  console.log(files.name);

  files.mv(`${__dirname}/client/public/uploads/${files.name}`);
});

app.listen(5000, () => console.log("Server started"));
