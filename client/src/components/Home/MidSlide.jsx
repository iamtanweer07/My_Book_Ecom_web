import { Box, styled } from '@mui/material';
import Slide from './Slide';



const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)`
    width: 83%;

   `;

const RightComponent = styled(Box)`
    margin-top: 10px;
    background: '#FFFFFF';
    width: 17%;
    margin-left: 10px;
    padding: 5px;
    text-align: 'center';
  `
  

const MidSlide = ({product ,title ,timer}) => {
    
    const adURL = 'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/624c2cd8ef09e_json_image_1649159384.webp';

    return (
       
        <Component>
           <LeftComponent>
           <Slide
            products={product}
            timer ={timer}
            title ={title}
           
           />
           
           </LeftComponent>

            <RightComponent>
                <img src={adURL} alt="ad" style={{width: 217}}/>
            </RightComponent>
            </Component>
      
    )
}

export default MidSlide;