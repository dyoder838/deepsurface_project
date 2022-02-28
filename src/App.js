import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from '../src/pages/Main';
import DashBoard from '../src/pages/DashBoard';
import NavBar from './components/NavBar';

import Grid from '@mui/material/Grid';

import Db from '../src/vulnerability-data.json'


function App() {

  return (
    <Router>

      <Grid container>

        <NavBar stuff={Db}/>

        <Routes>

          <Route exact path="/" element={<MainPage stuff={Db}/>} />;
          <Route exact path="/dashboard" element={<DashBoard stuff={Db} />} />;

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