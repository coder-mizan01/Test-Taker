// Import the necessary modules
import express from "express";
import connectDB from "./Database/db.js";
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//imported files

import authRoutes from "./Routes/UserRoute.js";
import question from "./Routes/QuestionRoute.js"


const app = express();

// Connect to the database
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(authRoutes);
app.use(question);

//static file

app.use(express.static(path.join(__dirname,'./client/build')))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
});


export default app;
