
import React, { Component } from 'react'
import CustomerService from '../../services/CustomerService';

class CustomerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                customer: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then( res => {
            this.setState({customer: this.state.customer.filter(customer => customer.customerId !== customerId)});
        });
    }
    viewCustomer(customerId){
        this.props.history.push(`/view-employee/${customerId}`);
    }
    editCustomer(customerId){
        this.props.history.push(`/add-employee/${customerId}`);
    }

    componentDidMount(){
        CustomerService.getCustomer().then((res) => {
            this.setState({ customer: res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        
        return (
            <div>
                 <h2 className="text-center">Custmer List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>CustomerId</th>
                                    <th> Name</th>
                                    <th>Email </th>
                                    <th> Mobile Number</th>
                                    <th> Address</th>
                                    <th> Gender</th>
                                    <th> DOB</th>
                                    <th> Username</th>
                                    <th> Password</th>
                                  
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customer.map(
                                        customer => 
                                        <tr key = {customer.customerId}>
                                             <td> { customer.fullName} </td>   
                                             <td> {customer.emailId}</td>
                                             <td>{customer.mobileNumber}</td>
                                             <td>{customer.address}</td>
                                             <td>{customer.gender}</td>
                                             <td>{customer.dob}</td>

                                             <td>{customer.username}</td>
                                             <td>{customer.password}</td>


                                             <td>
                                                 <button onClick={ () => this.editCustomer(customer.customerId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer.customerId)} className="btn btn-info">View </button>
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

export default CustomerList