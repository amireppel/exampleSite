'use strict';
import {createStore} from 'redux';
//createStore


export function booksReducers(state={books:[{ id: 1,
  title:'War and Peace',
  author:'Tolstoy',
description:'description of book',
price:'3$'},
{ id: 2,
  title:'second book title',
  author:'author name',
description:'description of book2',
price:30},
{ id: 3,
  title:'third book title',
  author:'author name',
description:'description of book2',
price:30}]}, action){
  switch (action.type){
    case 'GET_BOOKS':
      return {...state, books:[...state.books]}
    case  'POST_BOOK':
  //  let books = state.concat(action.payload);
    //return    books;
    return {books:[...state.books,...action.payload]}
    break;
    case  'DELETE_BOOK':
  //  let books = state.concat(action.payload);
    //return    books;
    console.log('are we here yes yes!!!!@!!' )
    const bookListDelete = state.books;
    let indexTodelete= bookListDelete.findIndex(function(book){
          console.log('book id'+ book.id+ 'action id',  action.payload[0].id)
          return book.id ==action.payload[0].id
  })
  console.log(indexTodelete);
    return {books:[... bookListDelete.slice(0,indexTodelete ),... bookListDelete.slice(indexTodelete+1)]}
    break;
    case 'UPDATE_BOOK':
  //  let books = state.concat(action.payload);
    //return    books;
    console.log('are we here yes yes!!!!!' )

    const bookListUpdate = state.books;
    let indexToUpdate= bookListUpdate .findIndex(function(book){
          console.log('book id'+ book.id+ 'action id',  action.payload[0].id)
          return book.id ==action.payload[0].id
  })
    console.log(action.payload[0]);
    console.log(bookListUpdate.slice(0,indexToUpdate));
  console.log(indexToUpdate);
    return {books:[... bookListUpdate.slice(0,indexToUpdate),...action.payload,...bookListUpdate.slice(indexToUpdate+1)]}
    break;
  }
  return state;
}
