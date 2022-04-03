import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/product.css'
const Product = ({product}) => {
    const {title, price, image, id}=product
    return (
        <div>
            <div className='product text-center'>
            <img src={image} className='img-fluid' alt="" />
            <div>
                <h5>{title}</h5>
                <h6>${price}</h6>
            </div>
           <Link to={`order/${id}`}><button>Buy Now</button></Link>
        </div>
        </div>
    );
};

export default Product;