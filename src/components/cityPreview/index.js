import React, { useContext } from 'react';
import Context from './../../Context';
import './style.css';

const CityPreview = ({ city }) => {
    const { data } = useContext(Context);

    return (
        <div className='city-preview'>
            <h2>{city}</h2>
            <span className='temp'><p>{data[city]?.main.temp}</p>º</span>
        </div>
    )
}

export default CityPreview;
