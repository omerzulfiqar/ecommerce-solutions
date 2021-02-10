import express from "express";
import productsRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

// serve static files from "public"
app.use(express.static(path.join(__dirname, "./public")));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());

// Handling and preventing CORS Errors for REST Api
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  // Browser will always send options request before any request
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET, UPDATE"
    );
    return res.status(200).json({});
  }
  next(); // TO avoid locking incoming reqs in case we don't return immediately ater options re so other routes can take over
});

// use routes
app.use("/products", productsRoutes);
app.use("/orders", orderRoutes);

// Setting up mongo cluster using mongoose
const mongoURI = `mongodb+srv://omer:${process.env.MONGOATLAS_PWD}@e-commerce-data.vrpf6.mongodb.net/${process.env.MONGOATLAS_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


// Catch 404 and forward to error handler
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
  // res.status(200).json({
  //   message: "Working!",
  // });
});

export default app;
