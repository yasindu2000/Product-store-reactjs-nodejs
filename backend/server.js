import express from "express";  
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();


const app = express();


app.use(express.json());


app.post('/api/products', async (req, res)=>{
    const product = req.body; //user send the data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct});
    } catch (error) {
        console.error("error in create product:", error.message);
        res.status(500).json({success:false, message:"Server Error"})
        
    }
})

app.delete("/api/products/:id" , async (req, res)=>{

    const {id} = req.params;
    
})

app.listen(5000, ()=>{
    connectDB();
    console.log("Server Running port 5000:hellow");
})


// OtzsVrk55QMMcfxD