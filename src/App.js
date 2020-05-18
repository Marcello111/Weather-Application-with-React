import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import Weather from "./Weather";


const App = () => (
  
  <Router>
      <Fragment>
        <Weather/>
      </Fragment>
  </Router>  
);


export default App;