import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateSubscription from './components/CreateSubscription';
import EditSubscription from './components/EditSubscription';
import DeleteSubscription from './components/DeleteSubscription';

function App() {
  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
          <button>Test</button>
        </p>
        
    <Router>
      <Routes>
        <Route path="/create" element={<CreateSubscription/>} />
        <Route path="/edit" element={<EditSubscription/>} />
        <Route path="/delete" element={<DeleteSubscription/>} />


      </Routes>
    </Router>
    </div>
  );
}

export default App;
