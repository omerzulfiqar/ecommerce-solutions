import express from "express";
import index from "./routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";

dotenv.config({
  silent:true
})

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

// serve static files from "public"
app.use(express.static(path.join(__dirname, './public')))

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());

// use routes
app.use("/", index);

//Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  // console.log(app.get('env'))
  res.render("error", {
    message: err.message,
    error: app.get("env") === "development" ? err : {},
  });
  next();
});

export default app;
