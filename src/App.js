import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AvailableCar from "./components/Subscription/AvailableCarList";
import CreateSubscription from "./components/Subscription/CreateSubscription";
import CreateDamageReport from "./components/Damage/CreateDamageReport";
import EditDamageReport from "./components/Damage/EditDamageReport";
import DeleteDamageReport from "./components/Damage/DeleteDamageReport";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap
import "./App.css";
import EditSubscription from "./components/Subscription/EditSubscription";
import ListOfSubscriptions from "./components/Subscription/ListOfSubscriptions";
import DeleteSubscription from "./components/Subscription/DeleteSubscription";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/CreateDamageReport" element={<CreateDamageReport />} />

              <Route path="/createSubscription/:id"element={<CreateSubscription />}/>
              <Route path="/ListOfSubscriptions" element={<ListOfSubscriptions />} />
              <Route path="/EditSubscription/:id" element={<EditSubscription />} />
              <Route path="/DeleteSubscription/:id" element={<DeleteSubscription />} />


              <Route path="/AvailableCarList" element={<AvailableCar />} />
              <Route path="/ListOfCars" element={<CreateSubscription />} />

              <Route path="/CreateDamageReport/:id" element={<CreateDamageReport />} />
              <Route path="/EditDamageReport/:id" element={<EditDamageReport />} />
              <Route path="/DeleteDamageReport/:id" element={<DeleteDamageReport />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;