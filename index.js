import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {posts: posts});
});