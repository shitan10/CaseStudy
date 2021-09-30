import React from "react";
import axios from "axios";

import ProductService from "../../services/ProductService";
//axios.defaults.withCredentials = true;
export default class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId:this.props.match.params.productId,
             productName:'',
             productType:'',
             category:'',
             image:'',
             price:'',
             description:'',
             specification:''
        }
        this.changeProductIdHandler = this.changeProductIdHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductTypeHandler = this.changeProductTypeHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeSpecificationHandler = this.changeSpecificationHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    componentDidMount(){
        ProductService.getProductByProductId(this.state.productId).then((res)=>{
            let product=res.data;

            this.setState({productId:product.productId,
                productName:product.productName,
                productType:product.productType,
                category:product.category,
                image:product.image,
                price:product.price,
                description:product.description,
                specification:product.specification
                
            });
            });
        }
        saveOrUpdateProduct=(e)=>{

            e.preventDefault();
            let product = {productId:this.state.productId,productName:this.state.productName,productType:this.state.productType,category:this.state.category,price:this.state.price,image:this.state.image,description:this.state.description,specification:this.state.specification};
            console.log('product => ' + JSON.stringify(product));
            ProductService.updateProduct(product,this.state.productId).then(res=>{
                this.props.history.push("/upadteProduct");

            });
        }
    
    // componentDidMount() {
    //     // let role = localStorage.getItem("role");
    //     // if (role === "USER" || role === "ANON") {
    //     //     window.location.href = "/notAuthorized";
    //     // }
    //     let link = "http://localhost:8080/getAllProducts" + this.props.match.params.productId;
    //     axios.get(link)
    //     .then(res => {
    //         this.setState({
    //         productId:res.data.productId,
    //         productName:res.data.productName,
    //         productType:res.data.productType,
    //         category:res.data.category,
    //         image:res.data.image,
    //         price:res.data.price,
    //         description:res.data.description,
    //         specification:res.data.specification
               
    //         })
    //     })
    //     .catch(err => {
    //         alert(err);
    //     });
    // }
    changeProductIdHandler= (event) => {
        this.setState({productId: event.target.value});
    }
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }
    changeProductTypeHandler= (event) => {
        this.setState({productType: event.target.value});
    }
    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changSpecificationHandler= (event) => {
        this.setState({specification: event.target.value});
    }
    

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                

                <div className="form-group">
                    <label>ProductId</label>
                    <input value={this.state.productId} onChange={this.changeProductIdHandler} id="username" type="text" className="form-control" placeholder={this.state.productId} />
                </div>

                <div className="form-group">
                    <label>productName</label>
                    <input value={this.state.productName} onChange={this.changeProductNameHandler} id="username" type="text" className="form-control" placeholder={this.state.productName} />
                </div>
                <div className="form-group">
                    <label>productType</label>
                    <input value={this.state.productType} onChange={this.changeProductTypeHandler} id="email" type="number" className="form-control" placeholder={this.state.productType} />
                </div>
                <div className="form-group">
                    <label>category</label>
                    <input value={this.state.category} onChange={this.changeCategoryHandler} id="email" type="text" className="form-control" placeholder={this.state.category} />
                </div>
                <div className="form-group">
                    <label>image</label>
                    <input value={this.state.image} onChange={this.changeImageHandler} id="email" type="text" className="form-control" placeholder={this.state.image} />

                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input value={this.state.price} onChange={this.changePriceHandler} id="email" type="number" className="form-control" placeholder={this.state.price} />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input value={this.state.description} onChange={this.changeDescriptionHandler} id="email" type="text" className="form-control" placeholder={this.state.description} />
                </div>

                <div className="form-group">
                    <label>Specification</label>
                    <input value={this.state.specification} onChange={this.changeSpecificationHandler} id="email" type="text" className="form-control" placeholder={this.state.specification} />
                </div>
                <button className="btn btn-success" >Save</button>
                <button type="submit" className="btn btn-dark btn-lg btn-block"onClick={this.saveOrUpdateUser}>Update product</button>
                
            </form>
        );
    }
}