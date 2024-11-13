import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from './routes/index';
import path from "path";
import { create } from 'express-handlebars';
import morgan from "morgan";
import authRoutes from './routes/auth'; 

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main", 
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use('/', authRoutes); 

// Static files
app.use(express.static(path.join(__dirname, "public")));

export default app;