import React from 'react';
import '../../Style/suprise.css';
import suprise from '../../Assets/video/suprise.mp4'
import {  HeartIcon } from '@heroicons/react/solid'


const Suprise = () => {
    return (
        <div className='suprise p-5'>
            <div className="container pt-3">
            <div className='row g-5 row-cols-md-2 justify-content-center align-items-center'>
                <div>
                <video width="100%" controls >
                     <source src={suprise} type="video/mp4"/>
                </video>
                </div>
                <div>
                    <h2 className='pb-3'>Suprise Your <span>Valentine!</span> <br/>
                    Let us arrange a smile.</h2>
                    <p>Where flowers are our inspiration to create lasting memories. Whatever the occasion...</p>
                    <div>
                        <p> <span><HeartIcon className="heart"/></span> Hand picked just for you.</p>
                        <p><span><HeartIcon className="heart"/></span> Unique flower arrangements</p>
                        <p> <span><HeartIcon className="heart"/></span> Best way to say you care.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Suprise;