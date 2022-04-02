import React from 'react';
import '../../Style/product.css'
const Product = ({product}) => {
    const {title, price, image, }=product
    return (
        <div>
            <div className='product text-center'>
            <img src={image} className='img-fluid' alt="" />
            <div>
                <h5>{title}</h5>
                <h6>${price}</h6>
            </div>
            <button>Buy Now</button>
        </div>
        </div>
    );
};

export default Product;