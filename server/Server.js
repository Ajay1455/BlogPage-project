const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const dotenv = require("dotenv");
const authRoute = require("./controller/auth");
const blogRoute = require("./controller/blogRoutes");


dotenv.config();
const port =4000;
mongoose.set("strictQuery", true);


//to connect to mongoose
mongoose
  .connect(process.env.MONGO_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

  mongoose.connection.on('disconnected',()=>{
    console.log("Mongoose Disconnected.");
  })

  mongoose.connection.on('connected',()=>{
    console.log("Mongoose connected.");
  })

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body);
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', true)
  next()
})
app.use(
  cors({
    origin: ['http://localhost:3000'],
  }),
)
app.use("/auth", authRoute);
app.use("/blogs", blogRoute);

app.listen(port,() => {
  console.log(`Listening to port ....${port}`);
});
