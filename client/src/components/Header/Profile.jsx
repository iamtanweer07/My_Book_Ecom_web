
import { Box ,Typography, Menu , MenuItem , styled} from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";

const Component = styled(Menu) `
   margin-top:5px;
    
`;

const Logout = styled(Typography)`
  font=size:14px;
  margin-left:20px;
 
  
  `
  ;

const Profile = ({account , setAccount}) => {
   
    const [open , setOpen] = useState (false);
    
    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const logout = ()=>{
     setAccount('');
    }
    return(
       <div>
     <Box onClick={handleClick}>     
      <Typography style={{ margin:2 , cursor:'pointer' }}>{account}</Typography></Box>
       <Component 
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick= {() => {handleClose(); logout();}}>
          <PowerSettingsNewIcon color="#125667" fontSize="small"/>
        <Logout>Logout</Logout>

        </MenuItem>
      </Component>
     
     </div>
    );
}
export default Profile;