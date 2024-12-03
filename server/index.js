// IMPORTS FROM PACKAGES
const express = require("express");
var cors = require('cors')

const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb://localhost:27017/shopthanhtungdeptrai";
// middleware
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

  app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
  })
