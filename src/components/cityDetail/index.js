
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'
import Context from './../../Context';
import './style.css';

const CityDetail = () => {
    const { data } = useContext(Context);
    const location = useLocation();
    const currentCity = location.pathname.substring(1);
    const weather = data[currentCity];

    return (
        <div className='detail-view'>
            <span className='location'>
                <h2>{currentCity}, {weather?.sys.country}</h2>
            </span>
            <div className='temperatures'>
                <span className='min'>Min: {weather?.main.temp_min}ºC</span>
                <span className='avg'>{weather?.main.temp}ºC</span>
                <span className='max'>Max: {weather?.main.temp_max}ºC</span>
            </div>
            <p className='desc'>{weather?.weather[0].description}</p>
            <p className='wind'>Wind speed: {weather?.wind.speed} km/h</p>
        </div>
    )
}

export default CityDetail
