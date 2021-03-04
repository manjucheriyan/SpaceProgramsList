import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';
import ProductstylingController1 from './ProductstylingController1'


class Product extends React.Component {
  
    state = {
        selectValue: "NA",
        productCount:0,        
        productsArray:[],
        productObj:this.props.location.productObj,
        userObj:this.props.location.userObj
      }
  
      addToCart=()=>{

      FrontEndController.addCartDetails(this.state.productObj,this.state.userObj.email)
          .then(response=>{
            let newProductCount=response.data.cartCount;
            this.setState({
            productCount: newProductCount
          });
            swal("Product added to cart");
          })
          .catch(error=>{
            swal("Product Failed to add in cart")
          })
      }

      callbackFunction = (childData) => {
        this.setState({productsArray: childData})
        }

    
    render() {
        return (             
                <div>
                <Navbar name={this.state.userObj.Name} productCountInCart ={this.state.productCount} parentCallback = {this.callbackFunction} userObj ={this.state.userObj} productObj ={this.state.productObj}/>
                        <div>    Product Page</div>

<div><br/><br/><br/>
   <h2>{this.state.productObj.productName}</h2> 
   <h5>{this.state.productObj.productCategory}</h5> 
<br/>................<br/>................<br/>..............................
   <h6>other product details of<br/>{this.state.productObj.productName}</h6> ........<br/>.........<br/>
   <h2><span>&#8377;</span>{this.state.productObj.productPrice}</h2> 
</div>
<button type="submit" id="addToCart" className="btn btn-primary" onClick={this.addToCart}> Add item to cart</button>
 <Link to={{ 
      
        }}>
</Link>
  
 
 </div>

      
   
 );
}
}
export default withRouter(Product) ;




