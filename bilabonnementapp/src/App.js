import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AvailableCar from "./components/Subscription/AvailableCarList";
import CreateSubscription from "./components/Subscription/CreateSubscription";
import CreateDamageReport from "./components/Damage/CreateDamageReport";
import Car from "./components/Car/Car";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap
import "./App.css";
import EditCar from "./components/Car/EditCar";
import CreateCar from "./components/Car/CreateCar";
import DeleteCar from "./components/Car/DeleteCar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route
                path="/CreateDamageReport"
                element={<CreateDamageReport />}
              />
              <Route path="/AvailableCarList" element={<AvailableCar />} />
              <Route path="/ListOfCars" element={<Car />} />

              <Route path="/CreateCar/:id" element={<Car />} />
              <Route path="/EditCar/:id" element={<EditCar />} />
              <Route path="/DeleteCar/:id" element={<DeleteCar />} />
              {/* Rute til CreateSubscription med bilnavn som parameter */}
              <Route
                path="/createSubscription/:id"
                element={<CreateSubscription />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;