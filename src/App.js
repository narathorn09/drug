import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Disease from './pages/Disease';
import DiseaseDetail from './pages/DiseaseDetail';
import Drug from './pages/Drug';
import DrugDetail from './pages/DrugDetail';
import Principles from './pages/Principles';
import PrinciplesDetail from './pages/PrinciplesDetail';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Drug />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/disease/:id" element={<DiseaseDetail />} />  
          <Route path="/drug" element={<Drug />} />
          <Route path="/drug/:id" element={<DrugDetail />} /> 
          <Route path="/principles" element={<Principles />} />
          <Route path="/principles/:id" element={<PrinciplesDetail />} /> 
        </Routes>       
      </div>
    </Router>
  );
}

export default App;
