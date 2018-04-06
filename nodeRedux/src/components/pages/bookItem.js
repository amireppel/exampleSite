import React from 'react';
import {Row, Well,Col, Button} from 'react-bootstrap';
 class BookItem extends React.Component{
   render(){
     return(
     <Well>
     <Row>
     <Col xs={12}></Col>
     <h6>{this.props.title}</h6>
     <p>{this.props.author}</p>
     <p> {this.props.description}</p>
     <h6>{this.props.price}</h6>
     <Button bsStyle='primary'> buy now!</Button>
     </Row>
     </Well>)
   }


 }

 export default  BookItem;
