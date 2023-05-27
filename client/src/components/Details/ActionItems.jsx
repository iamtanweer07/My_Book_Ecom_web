import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../../service/Api';
import { post } from '../../utils/paytm.js';

import { addToCart } from '../../redux/actions/cartActions.js';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '85%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #125667;
    
`;

const ActionItems = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'saistafizza@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
   }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
           
            <Image src={product.detailUrl} /><br />
           
            <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10 , background: '#bde0e9'}} variant="contained">
            
            <Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow()} style={{marginRight: 10 , background: '#bde0e9'}} variant="contained"><Flash/>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItems;