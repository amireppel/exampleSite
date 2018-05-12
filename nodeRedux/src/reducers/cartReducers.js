'use strict';
import {createStore} from 'redux';
//createStore


export function cartReducers(state={cart:[]}, action){
  switch (action.type){
    case  'ADD_TO_CART':
  //  let books = state.concat(action.payload);
    //return    books;
    console.log('pay  bdddlab load is : ',action.payload)
    return {cart:[...state.cart,...action.payload]}
    break;

  }
  return state}
