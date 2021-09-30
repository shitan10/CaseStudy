import React from 'react';  
    
import axios from 'axios';  
    
class DeleteCustomer extends React.Component {  
  state = {  
    customer: []  
  }  

  
    
  componentDidMount() {  
    axios.get(`http://localhost:8081/getAllCustomers`)  
      .then(res => {  
        const customer = res.data;  
        this.setState({ customer });  
      })  
  }  
    
  deleteRow(customerId, e){  
    axios.delete(`http://localhost:8081/deleteCustomer/${customerId}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const customer = this.state.customer.filter(customer => customer.customerId !== customerId);  
        this.setState({customer });  
      })  
    
  }  
    
  render() {  
    const{customer}=this.state
    return (  
      <div>  
        <h1> Delete Customer</h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>ID</th>  
                  <th>CustomerName</th>  
                 <th> Image</th>
                <th> Email Id</th>
                <th> MobileNumber</th>
                <th>Gender</th>
                <th> DOB</th>
                <th>Address</th>
                <th>Action</th>
                          
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.customer.map((customer) => (  
                  
                <tr key={customer.Id}>  
                  <td>{customer.customerId}</td>  
                  <td>{customer.fullName}</td>  
                  <td><img src={customer.image} className="img"></img></td>
                  <td>{customer.emailId}</td>  
                  <td>{customer.mobileNumber}</td>  
                  <td>{customer.gender}</td>  
                  <td>{customer.dob}</td>  
                  <td>{customer.address}</td>    
                  <td>  

                      
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(customer.customerId, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
export default DeleteCustomer;