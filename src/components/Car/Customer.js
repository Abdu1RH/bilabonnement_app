import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


function Customer(props) {
    console.log(props.sendToParent);
    const { id } = useParams();
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/customers')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("Error fetching customers", error);
            });
    }, []);

    const handleSelectChange = (e) => {
        const selectedCustomerId = e.target.value;
        props.sendToParent.customerID = selectedCustomerId;
        console.log(selectedCustomerId);
        const customer = customers.find(customer => customer.id === parseInt(selectedCustomerId));
        console.log(customer);
        setSelectedCustomer(customer);
    };

    return (
       
            <div>
                <p>Kunder</p> 
                <select className="form-control custom-dropdown" name="customerDropdown" id="customerDropdown" onChange={handleSelectChange}>
                    <option value="">Vælg en kunde</option>

                    {customers.length > 0 && 
                        customers.map(customer => (
                            <option key={customer.id} value={customer.id}>
                                {customer.firstName}
                                {customer.id}
                            </option>
                        ))
                    }
                </select>

                {selectedCustomer && (
                    <div>
                        <h2>Valgt kunde: {selectedCustomer.firstName}</h2>
                    </div>
                )}
                
            </div>
    
    );
}

export default Customer;
