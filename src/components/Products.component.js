import React, {Component} from 'react';
import ProductDataService from '../services/product.service'

class ProductsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ProductDataService.getProducts().then((res) => {
            this.setState({products: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Identification</th>
                                    <th>Label</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                                <td>{product.label}</td>
                                                <td>{product.description}</td>
                                                <td>{product.price}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default ProductsComponent;
