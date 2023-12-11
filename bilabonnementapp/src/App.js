import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AvailableCar from "./components/Subscription/AvailableCarList";
import CreateSubscription from "./components/Subscription/CreateSubscription";
import CreateDamageReport from "./components/Damage/CreateDamageReport";
import Car from "./components/Car/Car";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap
import "./App.css";
import EditCar from "./components/Car/EditCar";
import CreateCar from "./components/Car/CreateCar";
import DeleteCar from "./components/Car/DeleteCar";
import imgOfSubscription from "./img/imgSubscription.jpg"; //Importer billedet "car rental contract" fra img mappen under src
import imgOfDamageReport from "./img/imgDamageReport1.jpg";

function App() {
  return (
    <BrowserRouter>
      <div>
       {/* <div class="sidenav"></div>*/}
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Bilabonnement intern
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
              />
               {/* Administrer lejeaftale knap */}
              <Link
                to="/ListOfCars"
                className="btn btn-info btn-overlay"
              >
                Administrer lejeaftale
              </Link>
            </div>
            {/* Mellemrum mellem containere */}
            <div className="col-2"></div>
            {/* Opret skaderapport container */}
            <div className="col-md-5 container-secondary p-3 mb-3">
              <h1>Skade og udbedring</h1>
              <img
                src={imgOfDamageReport}
                alt="picture of a car condition report"
                className="image-size"
              />
              <Link to="/createDamageReport" className="btn btn-info">
                Administrer skaderapport
              </Link>
            </div>

            <div className="col-md-5 container-secondary p-3 mb-3">
              <h1>Rapportering og overvågning</h1>
              <img
                src={imgOfDamageReport}
                alt="picture of a car condition report"
                className="image-size"
              />
              <Link to="/AvailableCarList" className="btn btn-info">
              Se overblik over ulejede biler
              </Link>
            </div>

            {/* Se antal udlejede biler container */}
            <div className="col-md-5 container-rentedCars p-3 mb-3">
              <h2>Hvor mange biler er lejet ud:</h2>
            </div>
            {/* Se antal ledige biler container */}
            <div className="col-md-5 container-notRentedCars p-3 mb-3">
              <h2>Hvor mange biler er ikke lejet ud:</h2>
            </div>
            {/* sammenlagt priser af de udlejede biler container */}
            <div className="col-md-5 container-totalPrice p-3 mb-3">
              <h2>
                Hvad er den sammenlagte pris på de nuværende udlejede biler?
              </h2>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/CreateDamageReport" element={<CreateDamageReport />} />
          <Route path="/AvailableCarList" element={<AvailableCar />} />
          <Route path="/ListOfCars" element={<Car />} />

          <Route path="/CreateCar/:id" element={<Car />} />
          <Route path="/EditCar/:id" element={<EditCar />} />
          <Route path="/DeleteCar/:id" element={<DeleteCar />} />
          {/* Rute til CreateSubscription med bilnavn som parameter */}
          <Route path="/createSubscription/:id" element={<CreateSubscription />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
