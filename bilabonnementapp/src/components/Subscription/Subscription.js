import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Subscription(props) {
    console.log(props.sendToParent);
    const { id } = useParams();
    const [subscriptions, setSubscriptions] = useState([]);
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/subscriptions')
            .then(response => {
                setSubscriptions(response.data);
            })
            .catch(error => {
                console.error("Error fetching subscriptions", error);
            });
    }, []);

    const handleSelectChange = (e) => {
        const selectedSubscriptionId = e.target.value;
        props.sendToParent.subscriptionID = selectedSubscriptionId;
        console.log(selectedSubscriptionId);
        const subscription = subscriptions.find(subscription => subscription.id === parseInt(selectedSubscriptionId));
        console.log(subscription);
        setSelectedSubscription(subscription);
    };

    return (
        <div>
            <h1>Abonnementer</h1>
            <select name="subscriptionDropdown" id="subscriptionDropdown" onChange={handleSelectChange}>
                <option value="">Vælg en subscription</option>
                {subscriptions.length > 0 &&
                    subscriptions.map(subscription => (
                        <option key={subscription.id} value={subscription.id}>
                            {subscription.id}
                        </option>
                    ))
                }
            </select>

            {selectedSubscription && (
                <div>
                    <h2>Valgt kunde: {selectedSubscription.id}</h2>
                </div>
            )}
        </div>
    );
}

export default Subscription;
