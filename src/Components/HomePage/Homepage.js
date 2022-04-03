import React from 'react';
import Products from '../Products/Products';
import Slider from '../slider/Slider';
import Suprise from '../Suprise/Suprise';

const Homepage = () => {
    return (
        <div>
            <Slider></Slider>
            <Products/>
            <Suprise/>
            <h1>Developer</h1>
        </div>
    );
};

export default Homepage;