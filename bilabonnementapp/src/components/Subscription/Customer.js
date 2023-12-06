import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Customer() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '', // Tekstfelt
    cpr: '', // Tekstfelt (CPR-nummer som en streng)
    accountNumber: 0, // Heltalsfelt
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Hvis det er accountNumber, konverteres værdien til et heltal, ellers er det en tekststreng
    const newValue = name === 'accountNumber' ? parseInt(value) : value;

    setCustomer({ ...customer, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("<URL>", customer) // Erstatt "<URL>" med den faktiske URL til POST-anmodningen
      .then(() => {
        // Handle success, f.eks. navigere til en anden side
        navigate('/');
      })
      .catch(error => {
        // Handle fejl, f.eks. logge fejlen
        console.error('Error creating customer:', error);
      });
  };

  return (
    <div>
      <h2>Kundens information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={customer.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={customer.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          CPR:
          <input type="text" name="cpr" value={customer.cpr} onChange={handleChange} />
        </label>
        <br />
        <label>
          Account Number:
          <input type="number" name="accountNumber" value={customer.accountNumber} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default Customer;
