import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js"
import doctorRoute from "./Routes/doctor.js"
import reviewRoute from "./Routes/review.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDb database is connected");
  } catch (error) {
    console.log("MongoDb database is connected failed ");
  }
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute) //http://localhost:5000/api/v1/auth/register  --> (POST)
app.use('/api/v1/users',userRoute) //http://localhost:5000/api/v1/users -->(GET)
app.use('/api/v1/doctors',doctorRoute) //http://localhost:5000/api/v1/users -->(GET)
app.use('/api/v1/reviews',reviewRoute) //http://localhost:5000/api/v1/users -->(GET)


app.listen(port, () => {
  connectDB();
  console.log("Server is Running on port " + port);
});
