'use strict';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './reducers/index.js';
import {addToCart} from './actions/cartActions.js';
import {postBooks,deleteBooks,updateBooks, getBooks} from  './actions/booksActions.js';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import BooksList from './components/pages/booksList.js';
//createStore
const middleware = applyMiddleware(createLogger());
const store = createStore(reducers, middleware);
if(Provider!= undefined)
{
  console.log('provider defiend')

}
else{
    console.log('no provider !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1')
}



store.subscribe(function(){

  console.log('store state is' , store.getState())
});

/*
store.dispatch(postBooks([
  { id: 1,
    title:'book title',
    author:'author name',
  description:'description of book',
  price:10},
  { id: 2,
    title:'second book title',
    author:'author name',
  description:'description of book2',
  price:30},
  { id: 3,
    title:'third book title',
    author:'author name',
  description:'description of book2',
  price:30}]));
*/
/*
store.dispatch(deleteBooks([{ id: 3,
  title:'third book title',
  author:'author name',
description:'description of book2',
price:30}]));
*/
/*
store.dispatch(updateBooks([
  { id: 2,
    title:'2nd book new title',
    author:'author name',
  description:'description of book3',
  price:40}
]));
*/
render(  <Provider store={store}>
    < BooksList/>
  </Provider>,
  document.getElementById('app'));
console.log('before mistake!!!!!!')
/*
store.dispatch(addToCart([{id:2}]));
*/
