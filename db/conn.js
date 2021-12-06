const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/dynamicmessage", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Connected to DB`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
