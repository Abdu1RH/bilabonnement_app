import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Customer from "../Car/Customer";
import Car from "../Car/Car";

function CreateSubscription() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newSubscription, setNewSubscription] = useState({
    startDate: "",
    endDate: "",
    carID: 0,
    customerID: 0,
    plannedDistanceInKilometers: 0,
  });

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(newSubscription);
    axios
      .post("http://localhost:8080/api/subscriptions", newSubscription)
      .then(() => navigate("/ListOfSubscriptions"))
      .catch((error) => console.error("Error creating subscription", error));
  };

  const handleChange = (e) => {
    const value = e.target.type === "input" ? e.target.checked : e.target.value;
    setNewSubscription({ ...newSubscription, [e.target.name]: value });
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1>Lejeaftaler</h1>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="container-around-lease-container">
            <div className="lease-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="subscription-container">
                    <h1>Abonnement information</h1>
                    <Car
                      sendToParent={newSubscription}
                      handleChange={handleChange}
                    />
                    <Customer
                      sendToParent={newSubscription}
                      handleChange={handleChange}
                    /> 
                    <form onSubmit={handleCreate}>
                      <div className="mb-3">
                        <label htmlFor="startDate" className="form-label">
                          Start Dato:
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="startDate"
                          name="startDate"
                          value={newSubscription.startDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="endDate" className="form-label">
                          Slut dato:
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="endDate"
                          name="endDate"
                          value={newSubscription.endDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="plannedDistance" className="form-label">
                          Antal aftalt kørt km:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="plannedDistance"
                          name="plannedDistanceInKilometers"
                          value={newSubscription.plannedDistanceInKilometers}
                          onChange={handleChange}
                          min={1} 
                          max={10000000}
                        />
                      </div>
                      <button className="createDamageReport-btn" type="submit">
                        Opret abonnementsaftale
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

export default CreateSubscription;
