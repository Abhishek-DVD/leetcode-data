const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin:["http://localhost:5173","https://abhishekballi13.github.io","https://personal-portfolio-abhishek-devs-projects-5f1be1ee.vercel.app"],
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization", "X-CSRF-Token", "X-Requested-With", "Accept", "Accept-Version", "Content-Length", "Content-MD5","Date", "X-Api-Version"],
}));
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const leetcodeRouter = require("../src/routes/leetcode");

app.use("/",leetcodeRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server is running at port : 7777");
})