import { useContext, useState} from 'react';

import { Box ,Button, Typography,styled,Badge} from "@mui/material";
import { ShoppingCart} from "@mui/icons-material";
import { DataContext } from '../../context/DataProvider';
import { useSelector } from 'react-redux';
///components
import LoginDialog from "../Login/LoginDialog";
import Profile from './Profile';
import { Link } from 'react-router-dom';

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#125667',
      fontSize: 16,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#125667',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)`
 color:#125667;
 background:#ffffff;
 text-transform:none;
 padding:5px 40px;
 border-radius:2px;
 box-shadow:none;
 font-weight:600;
 height:20;
 
`
const Container = styled(Box)(({ theme}) =>({
   display: 'flex',
  [theme.breakpoints.down('md')]: {
     display: 'block'
  }
}));
 


const CustomButtons = () =>{
      const [open , setOpen] = useState(false);

     const { account , setAccount} = useContext(DataContext) ;
     const {cartItems} =useSelector(state => state.cart)
     
    const openDialog = () => {
        setOpen(true);
    }
    return(
     <Wrapper>
     {
       account ? <Profile account ={account} setAccount={setAccount}/> :
       <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
     }

    
    <Typography style={{marginTop:4, width:135}}>Become a Seller</Typography>
    <Typography style={{marginTop:4}}>More</Typography>

    <Link to='/Cart'>
    <Container>
     <Badge badgeContent={cartItems?.length} color = "primary" >
     <ShoppingCart style={{marginTop:4}} />
     </Badge>
    <Typography style={{marginTop:4}} >Cart</Typography>
    
    </Container>
    </Link>

    <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>



    )
}
export default CustomButtons;