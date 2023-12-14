import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Customer() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    cpr: '',
    accountNumber: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'accountNumber' ? parseInt(value) : value;
    setCustomer({ ...customer, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("<URL>", customer)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error creating customer:', error);
      });
  };

  return (
    <div>
      <h2>Kundens information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Fornavn:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={customer.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Efternavn:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={customer.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpr" className="form-label">
            CPR nr:
          </label>
          <input
            type="text"
            className="form-control"
            id="cpr"
            name="cpr"
            value={customer.cpr}
            onChange={handleChange}
            min={1} 
            max={8}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label">
            Kontonummer:
          </label>
          <input
            type="number"
            className="form-control"
            id="accountNumber"
            name="accountNumber"
            value={customer.accountNumber}
            onChange={handleChange}
            min={1} 
            max={10}
          />
        </div>
      
      </form>
    </div>
  );
}

export default Customer;
