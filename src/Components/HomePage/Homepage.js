import React from 'react';
import Products from '../Products/Products';
import Slider from '../slider/Slider';

const Homepage = () => {
    return (
        <div>
            <Slider></Slider>
            <br/>
            <Products/>
        </div>
    );
};

export default Homepage;