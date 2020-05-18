import React, { useState } from "react";
import './Weather.css';

// import * as Icons from '../src/img';

const Result = ({ location, temperature, description }) => {
    return <div>

              <div id="location" className="location-div" >{ location }</div>
              {/* <div id="picture" className="icon"><img src={require('./img/03n.png')} alt="Icons" /></div> */}
              <div id="temperature" className="temperature-div">{ temperature }</div>
              <div id="description" className="description-div">{ description }</div>

            </div>
}

export default Result;