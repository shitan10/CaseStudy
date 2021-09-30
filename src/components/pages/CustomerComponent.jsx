import axios from 'axios';
import React, { Component } from 'react'
import CustomerService from '../../services/CustomerService';

class CustomerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

                customer: []
        }
        // this.state = {
        //     // step 2
        //     id: this.props.match.params.productId,
        //     customerId:'',
        //     fullName: '',
        //     image: '',
        //     emailId: '',
        //     mobileNumber:'',
        //     gender:'',
        //     dob:'',
        //     address:''
        // }


         this.updateCustomer = this.updateCustomer.bind(this);
            this.deleteCustomer = this.deleteCustomer.bind(this);
         }
          updateCustomer(){

          }
          deleteCustomer(){

          }
    
        // deleteCustomer(customerId){
        //     CustomerService.deleteCustomer(customerId).then( res => {
        //         this.setState({customer: this.state.customer.filter(customer => customer.customerId !== customerId)});
        //     });
        // }
        // deleteCustomer()
        // {

        // }
        // viewCustomer(customerId){
        //     this.props.history.push(`/view-employee/${customerId}`);
        // }
     
        componentDidMount(){
            CustomerService.getCustomer().then((res) => {
                this.setState({ customer: res.data});
            });
            CustomerService.deleteCustomer().then((res)=>{
                this.setState({customer:res.data});
            })
        }
    

    updateCustomer(customerId){
        this.props.history.push(`/saveCustomer/${customerId}`);
    }
     deleteCustomer(customerId){
         this.props.history.push(`/deleteCustomer/${customerId}`)
         
     }
    
    // editCustomer() {
    //     // call setState
    //   }
    componentDidMount(){
        axios.get('http://localhost:8081/getAllCustomers')
        .then((res)=>{
            this.setState({customer:res.data});
        });
    }
    
     render() {
        const{customer}=this.state
        return (

        

                <div>
                {
                    customer.length ?
                    customer.map(customer=><div style={{display:'inline-block',margin:'5px',textAlign:'center'}} key={customer.customerId}>
                        <div style={{display:'inline-block'}}>
                          
                        </div>
                    </div>
                    ):null}





                <h2 className="text-center">Customer List</h2>
                <div className="row">
                    <table className="table table-hover table-bordered ">

                    <thead className="table-danger">
                        <tr className="">
                           <th> CustomerID</th>
                           <th> CustomerName</th>
                           <th> Image</th>
                           <th> Email Id</th>
                           <th> MobileNumber</th>
                           <th>Gender</th>
                           <th> DOB</th>
                           <th>Address</th>
                           <th><button className="btn btn-primary btn-sm">Action</button></th>
                     
                        </tr>
                        </thead>

                        <tbody>
                            {this.state.customer.map(
                                customer =>
                                <tr key={customer.customerId}>
                                    <td> {customer.customerId}</td>
                                    <td>{customer.fullName}</td>
                                    <td><img src={customer.image} className="img"></img></td>
                                    <td>{customer.emailId}</td>
                                    <td>{customer.mobileNumber}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.dob}</td>
                                    <td>{customer.address}</td>
                                    <td>
                                        <div className="btn1">
                                           <button className= "btn btn-primary btn-sm" onClick={ () => this.updateCustomer(customer.customerId)} className="btn btn-info btn-sm">Update </button>
                                        </div>
                                        

                                        <div className="btn2">
                                          <button className= "btn btn-primary btn-sm" style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.customerId)} className="btn btn-danger btn-sm">Delete </button>
                                        </div> 
                                             </td>

                                        
                                    

                                    

                                </tr>
                            )
    }
                        </tbody>
                        </table>
                        </div>
                     
                   </div>
        )
    }
}

export default CustomerComponent
