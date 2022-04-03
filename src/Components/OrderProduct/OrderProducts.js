import React from 'react';
import { Link } from 'react-router-dom';

const OrderProducts = ({orderProduct}) => {
    // console.log();
    //  const {title, price, image, description}=orderProduct
    return (
        <div className='row g-4 row-cols-md-2 pt-5 justify-content-center  align-items-center '>
            <div>
                <img src={orderProduct?.image} className='img-fluid rounded' alt="" />
            </div>
            <div>
                 <h2>{orderProduct?.title}</h2> 
                <h6 className='text-black-50'>${orderProduct?.price}</h6>
                <p className='pt-3 text-muted'>{orderProduct?.description}</p>
                <br/>
                <span className='text-muted'>SKU: {orderProduct?.id}</span>
                <br/>
                <span className='text-muted'>Categories: Popular, Winter</span>
                <br/>
                <Link to="/cart"><button className='order-btn'>Add to Cart</button></Link>
            </div>
        </div>
    );
};

export default OrderProducts;