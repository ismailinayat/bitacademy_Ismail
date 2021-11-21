import React, {Component} from 'react';
import CustomerDataService from '../services/customer.service'

class CustomersComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }

        this.addCustomer = this.addCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount() {
        CustomerDataService.getCustomers().then((res) => {
            this.setState({customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer');
    }


    deleteCustomer(id) {
        CustomerDataService.deleteCustomer(this.state.customers.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/customers')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>

                 <h2 className="text-center">Customers List</h2>
                <button className="btn btn-success" onClick={this.addCustomer}>Add Customer</button>

                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Job Title</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                        <tr key={customer.id}>
                                            <td>{customer.firstName}</td>
                                                <td>{customer.lastName}</td>
                                                <td>{customer.jobTitle}</td>
                                                <td>{customer.emailAddress}</td>
                                                <td>{customer.category}</td>
                                                <td>
                                                    <button onClick={() => this.deleteCustomer(customer.id)} className="btn btn-danger">Delete</button>
                                                </td>

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

export default CustomersComponent;
