import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteSubscription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        axios.delete(`http://localhost:8080/api/subscriptions/${id}`)
            .then(() => {
                navigate('/');
            })
            .catch(error => console.error('Error deleting subscription:', error));
        });

    const handleDelete = () => {
        console.log('Deleting subscription with ID:', id);
        axios.delete(`http://localhost:8080/api/subscriptions/${id}`)
            .then(() => {
                navigate('/ListOfSubscriptions');
            })
            .catch(error => console.error('Error deleting subscription:', error));
    };

    return (
        <div>
            <h2>Delete Subscription</h2>
            {subscription && (
                <div>
                    <p>ID: {subscription.id}</p>
                    {/* Display other subscription details here */}
                    <button onClick={handleDelete}>Delete Subscription</button>
                </div>
            )}
        </div>
    );
}

export default DeleteSubscription;
