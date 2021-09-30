import React from 'react';  
    
import axios from 'axios';  
    
class DeleteProduct extends React.Component {  
  state = {  
    product: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:8080/getAllProducts`)  
      .then(res => {  
        const product = res.data;  
        this.setState({ product });  
      })  
  }  
    
  deleteRow(productId, e){  
    axios.delete(`http://localhost:8080/deleteProduct/${productId}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const product = this.state.product.filter(product => product.productId !== productId);  
        this.setState({ product });  
      })  
    
  }  
    
  render() {  
    const{product}=this.state
    return (  
      <div>  
        <h1> Delete Product</h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>ID</th>  
                  <th>ProductName</th>  
                  <th>ProductType</th>  
                  <th>Category</th>  
                  <th>Price</th>  
                  <th>Image</th>  
                  <th>Description</th>  
                  <th>Specification</th>  
                  <th>Action</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.product.map((product) => (  
                  
                <tr key={product.Id}>  
                  <td>{product.productId}</td>  
                  <td>{product.productName}</td>  
                  <td>{product.productType}</td>  
                  <td>{product.category}</td>  
                  <td>{product.price}</td>  
                  <td><img src={product.image} className="img"></img></td>
                  <td>{product.description}</td>  
                  <td>{product.specification}</td>    
                  <td>  

                      
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(product.productId, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
export default DeleteProduct;