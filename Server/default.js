import {Products} from "./constants/data.js";
import  Product   from   "./model/product-schema.js";


const DefaultData = async() => {
   try{
     
     await Product.insertMany(Products);
    
     console.log('Data imported successfully');
   } catch (error){
    console.log('Error while inswert data',error.message);
   }
}

export default DefaultData;