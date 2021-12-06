const express = require("express");
require("../db/conn");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const Message = require("../models/message");

// PATH DECLARATION -------------
const public_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
const path_to_public_folder = path.join(__dirname, "../public");

// SET ENGINE
app.use(express.static(path_to_public_folder));
app.set("view engine", "hbs");
app.set("views", view_path);
hbs.registerPartials(partial_path);

// middlewares
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

// Save Data
app.post("/contact", async(req, res)=>{
    try{
        const userData = new Message(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(e){
        res.status(500).send(`Error: ${e}`);
    }
})

// Start Server
app.listen(port, () => {
  console.log(`Listening to Port # ${port}`);
});
