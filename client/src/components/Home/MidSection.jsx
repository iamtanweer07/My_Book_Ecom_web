
import { Grid, styled } from '@mui/material';
import { Fragment } from 'react';

import {imageURL}  from   '../../components/constants/data.js';



const Wrapper = styled(Grid)`
 marign-top:10px
 justify-content: space-between;
`;

const Image = styled('img')(({theme})=>({
    marginTop : 10 ,
    width : '100%',
    height : '180px',
    dispaly : 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]:{
        ObjectFit:'cover',
        height:180
    }


    
   
}));


const MidSection = ()=>{
    const url = 'https://www.unodc.org/res/covid-19_html/COVID-19-banner_1303x323px.png';
    
    return(


 <Fragment>
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {

            imageURL.map(image => (
                <Grid items lg={4} md={4} sm={12} xs={12}>
                <img src={image} alt="img" style={{width: '100%' }}/>
                </Grid>
                ))

        }
     
    </Wrapper>
        <Image src={url} alt="covid" />
    </Fragment>




    )
}
export default MidSection;