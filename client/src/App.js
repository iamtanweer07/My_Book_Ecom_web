
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home';
import DetailView from './components/Details/DetailView.jsx';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider.jsx';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';

function App() {
  return (

    <BrowserRouter>
       <DataProvider>
       <Header/>
       <Box style={{marginTop:54 }}>
       <Routes>
       <Route   path ='/' element={<Home/>}/>
       <Route path='/product/:id' element={<DetailView/>}/>
       <Route path= '/cart' element={<Cart />} />
       </Routes>
       </Box>
       </DataProvider>
    </BrowserRouter>
  );
}

export default App;
