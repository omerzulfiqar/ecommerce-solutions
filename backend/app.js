import express from "express";
import index from "./routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));



// use routes
app.use("/", index);

// Error Handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    // console.log(app.get('env'))
    res.render("error", {
        message: err.message,
        error: app.get('env') === 'development' ? err : {},
      });
    next();
  });

export default app;
