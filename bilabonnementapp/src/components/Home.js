import { Link } from "react-router-dom";
import imgOfSubscription from "../img/Subscription.jpg";
import imgOfDamageReport from "../img/DamageReport.jpg";
import imgOfCars from "../img/carControl.jpg";

function Home() {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Bilabonnement ssintern
            </a>
          </div>
          {/* Din øverste menu */}
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* Andre menuelementer her */}
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
            <Link to="/ListOfCars" className="btn btn-info btn-overlay">
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

          <div className="col-md-5 container-third p-3 mb-3">
            <h1>Rapportering og overvågning</h1>
            <img
              src={imgOfCars}
              alt="picture of a car condition report"
              className="image-size"
            />
            <Link to="/AvailableCarList" className="btn btn-info">
              Se overblik over ulejede biler
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
