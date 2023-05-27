import {  Fragment ,useEffect } from "react";

//components
import Banner from "./Banner";
import Navbar from "./Navbar";

import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions.js";
import { useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import Slide from "./Slide";
import MidSection from "./MidSection";



const Components =styled(Box)`
 padding: 10px;
 background:#F2F2F2;

`

const Home = () =>{

 const {products} = useSelector(state => state.getProducts);
  
 console.log(products);
  
  
   const dispatch = useDispatch();

  useEffect(() => {
       dispatch(getProducts())
  },[dispatch])


    return(
        <Fragment>
          <Navbar/>
          
          <Components>
          
            <Banner/>
            <Slide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discount for You" timer={false}/>
            <Slide products={products} title="Suggested Items" timer={false}/>
            <Slide products={products} title="Top selection"  timer={false}/>
            <Slide products={products} title="Trandding Offer" timer={false}/>
            <Slide products={products} title="Top Deals of Accessaries" timer={false}/>
            </Components>
        </Fragment>

    )
};

export default Home;