import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  Count: 0,
  Key:null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
        ...state,
        products: action.payload,
        
        };
        case 'COUNT':
            return {
        ...state,
        Count:action.payload
            };
        case 'KEY':
            return {
        ...state,
        Key:action.payload
            };
        default:
        return state;
        }
};

export const store = configureStore({reducer});