'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions.js';
import {Grid, Col, Row , Button} from 'react-bootstrap';
import BookItem from './bookItem.js';
import BooksForm from './booksForm.js';
import Cart from './cart.js';
class BooksList extends React.Component{

    componentDidMount(){
      console.log('great');
      console.log('state propse are', this.props)
      this.props.getBooks()


    }
    render(){
      var bobon ={float:'right' }
      const booksList = this.props.books.map(function(book){
        return (<Col xs={12} sm={12} md={12}  key={book.id}>
          <BookItem
          id ={book.id}
          title = {book.title}
          description = {book.description}
          price = {book.price}
          />
          </Col>
        )

      });
      return(
        <Grid>
        <Row><Cart/></Row>
        <Col xs={12} sm={6}>
          <BooksForm /></Col>

        <Row>
          {booksList}</Row>
        </Grid>

      )
    }

}
function mapStateToProps(state){
  return{books: state.books.books}
}

function mapDispatchToProps(dispatch){
  console.log('are we here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  return bindActionCreators({
    getBooks:getBooks,
  }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksList)
