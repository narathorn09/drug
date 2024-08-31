import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Disease from './pages/Disease';
import DiseaseDetail from './pages/DiseaseDetail';
import Drug from './pages/Drug';
import DrugDetail from './pages/DrugDetail';
import BottomMenu from './components/BottomMenu';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Drug />} />
          {/* <Route path="/disease" element={<Disease />} />
          <Route path="/disease/:id" element={<DiseaseDetail />} />   */}
          <Route path="/drug" element={<Drug />} />
          <Route path="/drug/:id" element={<DrugDetail />} /> 
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
