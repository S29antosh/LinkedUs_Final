// importing necessary modules
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./config/DB.js";
import jobRoute from "./Routes/jobRoute.js";
import ApplicantRoute from "./Routes/FormRoute.js";
import loginRoute from "./Routes/loginRoute.js";
import RegisterRoute from "./Routes/RegisterRoute.js";
import AboutUs from "./Routes/AboutUs.js";

let token ="";

// setting the server

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// setting the middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the job portal");
});

// connecting to the database
connect();

// setting the routes
app.use("/api/jobs", jobRoute);                // Anuja Portion
app.use("/api/applicants", ApplicantRoute);    // Anuja Portion
app.use("/Login", loginRoute);                 // Krishita Portion
app.use("/api/Register", RegisterRoute);      // Krishita Portion
app.use("/api/Profile",AboutUs);              // Krishita Portion
