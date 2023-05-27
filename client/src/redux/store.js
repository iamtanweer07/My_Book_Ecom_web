import {createStore , combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from   'redux-thunk';
import { cartReducer } from './reducers/cartReducer.js'
import {  getProductsDetailsReducer, getProductsReducer }  from  './reducers/productsReducer.js';
const reducer = combineReducers({
       getProducts: getProductsReducer,
       getProductDetails: getProductsDetailsReducer,
       cart: cartReducer
});

const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default  store;