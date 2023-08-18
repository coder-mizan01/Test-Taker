// Import the necessary modules
import express from "express";
import connectDB from "./Database/db.js";

//imported files

import authRoutes from "./Routes/UserRoute.js";


const app = express();

// Connect to the database
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(authRoutes);

// Define routes
app.get('/', (req, res) => {
    res.send('hello')
});


export default app;
