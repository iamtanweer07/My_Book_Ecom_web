
import {AppBar , Toolbar ,Typography,IconButton,Drawer,List, styled} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Box,  } from '@mui/system';
///components
import CustomButtons from './CustomButttons';
import Search from './Search ';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const StyledHeader = styled(AppBar)`
   background:#bde0e9;
   height:55px;
`

const Component = styled(Link)`
  margin-left:12%;
  color:#125667;
  font-size: 20px;
  font-style:italic;
  line-height:0;
  text-decoration: none;
  

  
`
const SubHeading = styled(Typography)`
  font-size:10px;
  font-style:italic;
  margin-bottom:25px;
  line-height:0;

`
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const CustomButtonWrapper = styled('Box')(({ theme }) => ({ 
  margin: '0 5% 0 auto', 
  [theme.breakpoints.down('sm')]: {
      display: 'none'
  }
}));


const Header = () =>{
      
  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

  const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  <CustomButtons />
              </listItem>
          </List>
      </Box>
  );

    return(
        <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
        <Component to = '/'>
        <h3>HappyBook</h3>
        <SubHeading>Explore
           <Box component="span" style={{color:'yellow'}}>Plus</Box>
           </SubHeading>
          
        </Component>
          <Search/>
          <CustomButtonWrapper>

           <CustomButtons/>
          </CustomButtonWrapper>
        </Toolbar>
       </StyledHeader>
   
      

    )
}
export default Header;