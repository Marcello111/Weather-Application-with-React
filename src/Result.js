import React, { useState } from "react";
import './Weather.css';

const Result = ({ location, temperature, description }) => {
    return <div>

              <div id="location" className="location-div" >{ location }</div>
              <div id="temperature" className="temperature-div">{ temperature }</div>
              <div id="description" className="description-div">{ description }</div>

            </div>
}

export default Result;
