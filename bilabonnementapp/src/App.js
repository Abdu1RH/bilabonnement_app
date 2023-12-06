import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AvailableCar from './components/Subscription/AvailableCarList';
import CreateSubscription from './components/Subscription/CreateSubscription';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/ListOfAvailableCars">Opret lejeaftale </Link>
          <Link to="/create">Opret skaderapport </Link>
        </nav>
        <Routes>
          <Route path="/ListOfAvailableCars" element={<AvailableCar />} />
          
          {/* Rute til CreateSubscription med bilnavn som parameter */}
          <Route path="/createSubscription/:brand" element={<CreateSubscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
