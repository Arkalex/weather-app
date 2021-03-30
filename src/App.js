import React, { useEffect, useState } from 'react';
import { getWeather } from './services/getWeather'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CityList from './components/cityList/index';
import CityDetail from './components/cityDetail/index';
import Context from './Context';
import { cities } from  './utils/data'

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const MINUTE_MS = 60000;

  useEffect(() => {
    getWeather()
      .then((d) => {
        const answer = d.list;
        let aux = [];
        answer.forEach((c) => {
          aux[c.name] = c
        })
        setData(aux);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      await getWeather()
          .then((d) => {
            const answer = d.list;
            let aux = [];
            answer.forEach((c) => {
              aux[c.name] = c
            })
            setData(aux);
          });
    }, MINUTE_MS );

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="App">
      <h1>Weather App for Ulabox</h1>
      <div className='city-list'>
        <Context.Provider value={{ data }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <CityList cities={cities} />
              </Route>
              <Route path={['/barcelona', '/san francisco', '/london', '/paris']}>
                <CityDetail />
              </Route>
            </Switch>
          </Router>
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
