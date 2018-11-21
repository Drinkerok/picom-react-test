import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import generatorId from './../middlewares/generatorId';
import api from './../middlewares/api';


const enhancer = applyMiddleware(api, generatorId);
const store = createStore(reducer, {}, enhancer);


export default store;