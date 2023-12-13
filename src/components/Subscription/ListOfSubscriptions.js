import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListOfSubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/subscriptions')
      .then(response => {
        console.log(response);
        setSubscriptions(response.data);
      })
      .catch(error => console.log('Error fetching list of subscriptions:', error));
  }, []);

  return (
    <div>
      <h2>Aboennement oversigt</h2>
      <ul>
        {subscriptions.map(subscription => (
          <li key={subscription.id}>
            {subscription.customer.firstName + " " + subscription.customer.lastName + " : " + subscription.car.brand}

            <Link to={`/DeleteSubscription/${subscription.id}`}> Slet </Link>
            <Link to={`/EditSubscription/${subscription.id}`}> Opdatere </Link>
            <Link to={`/CreateSubscription/${subscription.id}`}> Opret </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfSubscriptions;