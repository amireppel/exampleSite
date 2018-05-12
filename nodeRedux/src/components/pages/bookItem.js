import React from 'react';
import {Row, Well,Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';

 class BookItem extends React.Component{
   handleCart(){
     const book = [
      {id:this.props.id,
     title:this.props.title,
     description: this.props.description,
      price: this.props.price}];

     this.props.addToCart(book)
   }
   render(){
     return(
     <Well>
     <Row>
     <Col xs={12}></Col>
     <h6>{this.props.title}</h6>
     <p>{this.props.author}</p>
     <p> {this.props.description}</p>
     <h6>{this.props.price}</h6>
     <Button  onClick={this.handleCart.bind(this)} bsStyle='primary'> buy now!</Button>
     </Row>
     </Well>)
   }


 }
 function mapStateToProps(state){

   return {cart: state.cart.cart}

 }
 function mapDispatchToProps(dispatch){
   return bindActionCreators({addToCart:addToCart}, dispatch)

 }

 export default connect(mapStateToProps, mapDispatchToProps) (BookItem);
