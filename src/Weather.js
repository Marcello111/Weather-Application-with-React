import React, { useState, useEffect } from "react";
import './Weather.css';
import Result from "./Result";
// import * as Icons from '../src/img';

const Weather = () => {
   
    const [showBox, setShowBox] = useState(false);
    const kelvin = 273;
    let weather = {};
    weather.temperature = {
    unit : "celsius"
    };


    const [ location, setLocation ] = useState("");
    // const [ icon, setIcon ] = useState("");
    const [ temperature, setTemperature ] = useState(0);
    const [ description, setDescription ] = useState("");


    useEffect(() => {
        async function resultApi() {
            const key= "6489ee30ecaa7bf763098f6967131257";
            let latitude = 51.45523;
            let longitude = -2.59665;
            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
            console.log(api);

            fetch(api)

            .then(function(response){
                let data = response.json();
                return data;
            })

            .then(function(data){
                weather.temperature.value = Math.floor(data.main.temp - kelvin);
                weather.description = data.weather[0].description;
                weather.iconId = data.weather[0].icon;
                weather.city = data.name;
                weather.country = data.sys.country;
            })
            
            .then(function(){
                displayWeather();
            });
        }

    
    function displayWeather(){
        // setIcon("./img/03n.png");
        setLocation(weather.city + ", " + weather.country);
        setTemperature(weather.temperature.value+"°C");
        setDescription(weather.description); 
    }
        resultApi();
    }, []);
      
    return ( <div>
                <div className="app-wrapper-main">
                    <div className="button-wrapper">
                        <button id="show" onClick={ ()=> setShowBox(!showBox) }>Show Weather</button>
                    </div>
                    {showBox &&
                    <div id="overlay" className="overlay-div">
                    </div>}
                    {showBox &&
                    <div className="app-wrapper-result">
                        <Result
                            location={location}
                            temperature={temperature}
                            description={description} 
                        />
                    </div>}      
    

                </div>  
            </div>
    );
};

export default Weather;