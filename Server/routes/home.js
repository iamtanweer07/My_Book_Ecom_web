
import express from "express";

import { userLogin, userSignup ,  } from "../controller/usercontoller.js";
import { getProductById, getproducts } from "../controller/productController.js";



const router = express.Router();

router.post('/' , userSignup);

router.post('/signup', userSignup);
  
router.post('/login', userLogin); 
router.get('/products', getproducts);
router.get('/product/:id', getProductById);
    
         

export default router;

