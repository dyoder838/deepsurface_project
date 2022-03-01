import React, { useState, useEffect } from 'react';

// NPM packages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import MainPage from '../src/pages/Main';
import DashBoard from '../src/pages/DashBoard';
import Analysis from '../src/pages/Analysis';

// Components
import NavBar from './components/NavBar';

// Data file to pass to components 
import Db from '../src/vulnerability-data.json';

// MUI requirements
import Grid from '@mui/material/Grid';



function App() {

  return (
    <Router>

      <Grid container>

        <NavBar db={Db}/>

        <Routes>

          <Route exact path="/" element={<MainPage db={Db}/>} />;
          <Route exact path="/dashboard" element={<DashBoard db={Db} />} />;
          <Route exact path="/analysis" element={<Analysis db={Db} />} />;

        </Routes>

      </Grid>

    </Router>

  );
}

export default App;


// const [dbState, setDbState] = useState({
  //   id: "",
  //   description: "",
  //   hosts: [],
  //   identifier: "",
  //   modified: "",
  //   patches: [],
  //   risk: "",
  //   urls: ""
  // });

  // Object.entries(Db).forEach(([index, data]).then(indexedData =>
  //   setDbState({
  //     id: indexedData.id,
  //     description: indexedData.description,
  //     hosts: indexedData.hosts,
  //     identifier: indexedData.identifier,
  //     modified: indexedData.modified,
  //     patches: indexedData.patches,
  //     risk: indexedData.risk,
  //     urls: indexedData.urls

  //   }))
  // );