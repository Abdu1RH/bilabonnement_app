import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditSubscription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subscription, setSubscription] = useState({
    startDate: "",
    endDate: "",
    carID: 0,
    customerID: 0,
    car: {},
    customer: {},
    plannedDistanceInKilometers: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/subscription/${id}`)
      .then((response) => setSubscription(response.data))
      .catch((error) => console.error("Error fetching subscription:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/subscriptions/${id}`, subscription)
      .then(() => navigate("/ListOfSubscriptions"))
      .catch((error) => console.error("Error updating subscription:", error));
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSubscription({ ...subscription, [e.target.name]: value });
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h2>Opdatere abonnement</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="container-around-lease-container">
            <div className="lease-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="subscription-container">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label className="form-label">Bil ID:</label>
                        <input
                          type="number"
                          className="form-control"
                          name="carID"
                          value={subscription.car.id}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="form-label">Kunde ID:</label>
                        <input
                          type="number"
                          className="form-control"
                          name="customerID"
                          value={subscription.customer.id}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="form-label">
                          Planlagt distance (i kilometer):
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="plannedDistanceInKilometers"
                          value={subscription.plannedDistanceInKilometers}
                          onChange={handleChange}
                          min={1}
                          max={1000000}
                        />
                      </div>
                      <div>
                        <label className="form-label">Start Dato:</label>
                        <input
                          type="date"
                          className="form-control"
                          name="startDate"
                          value={subscription.startDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="form-label">Slut Dato:</label>
                        <input
                          type="date"
                          className="form-control"
                          name="endDate"
                          value={subscription.endDate}
                          onChange={handleChange}
                        />
                      </div>

                      <button className="update-sub-btn" type="submit">
                        Opdater abonnement
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditSubscription;
