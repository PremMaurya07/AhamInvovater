import React,{Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/RoutesConfig';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS bootstrap/dist/css/bootstrap.min.css
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';//

const App = () => {

  return (

      <Router>
        <RoutesConfig />  
      </Router>

  );
};

export default App;
