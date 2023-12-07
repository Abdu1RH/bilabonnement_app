import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AvailableCar from './components/Subscription/AvailableCarList';
import CreateSubscription from './components/Subscription/CreateSubscription';
import CreateDamageReport from './components/Damage/CreateDamageReport';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap
import './App.css'; 
import imgFromLejeaftale from './img/billedeDokument.png'; //Importer billedet "billededokument" fra img mappen under src
import imgFromSkadeReport from './img/damageReportPicture.png';


function App() {
  return (

    <Router>

      <div>
        <div class="sidenav">
        </div>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Bilabonnement intern</a>
            </div>
            {/* Din øverste menu */}
            <ul className="nav navbar-nav">
              <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
              {/* Andre menuelementer her */}
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Opret lejeaftale container */}
            <div className="col-5 container-primary p-3 mb-3">
            <img src={imgFromLejeaftale} alt="Image Alt Text" className="image-size" />
              <Link to="/ListOfAvailableCars" className="btn btn-info btn-overlay">Opret lejeaftale</Link>
            </div>
            {/* Mellemrum mellem containere */}
            <div className="col-2"></div>
            {/* Opret skaderapport container */}
            <div className="col-5 container-secondary p-3 mb-3">
            <img src={imgFromSkadeReport} alt="Image Alt Text" className="image-size" />
              <Link to="/createDamageReport" className="btn btn-info">Opret skaderapport</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/ListOfAvailableCars" element={<AvailableCar />} />
          <Route path="/CreateDamageReport" element={<CreateDamageReport />} />
          {/* Rute til CreateSubscription med bilnavn som parameter */}
          <Route path="/createSubscription/:brand" element={<CreateSubscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
