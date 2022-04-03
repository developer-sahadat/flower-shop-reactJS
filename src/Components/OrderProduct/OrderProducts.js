import React from 'react';

const OrderProducts = ({orderProduct}) => {
    // console.log();
    //  const {title, price, image, description}=orderProduct
    return (
        <div className='row row-cols-md-2 pt-5 justify-content-center  align-items-center '>
            <div>
                <img src={orderProduct?.image} className='img-fluid rounded' alt="" />
            </div>
            <div>
                 <h2>{orderProduct?.title}</h2> 
                <h6 className='text-black-50'>${orderProduct?.price}</h6>
                <p className='pt-3 text-muted'>{orderProduct?.description}</p>
                <br/>
                <h5>Out of stock</h5>
                <span className='text-muted'>SKU: {orderProduct?.id}</span>
                <br/>
                <span className='text-muted'>Categories: Popular, Winter</span>
            </div>
        </div>
    );
};

export default OrderProducts;