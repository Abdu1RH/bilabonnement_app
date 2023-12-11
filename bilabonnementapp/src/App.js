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
    <BrowserRouter>
      <div>
       {/* <div class="sidenav"></div>*/}
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Bilabonnement intern system
              </a>
            </div>
            {/* Din øverste menu */}
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              {/* Andre menuelementer her */}
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Opret lejeaftale container */}
            <div className="col-md-5 container-primary p-3 mb-3">
              <h1>Lejeaftaler </h1>
              <img
                src={imgOfSubscription}
                alt="picture of a rental contract"
                className="image-size"

<div className="App">
      <header className="App-header">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route
                path="/CreateDamageReport"
                element={<CreateDamageReport />}
              

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
