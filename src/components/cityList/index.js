import React from 'react'
import CityPreview from './../cityPreview/index'
import {
    Link
} from "react-router-dom";
import './style.css';

const CityList = ({ cities }) => {
    return (
        <div className='city-list'>
            <ul>
                {
                    cities.map((city) => {
                        return <li key={city}>
                            <Link to={city} style={{ textDecoration: 'none' }}><CityPreview city={city} /></Link>
                        </li>
                    })
                }
                </ul>
        </div>
    )
}

export default CityList;
