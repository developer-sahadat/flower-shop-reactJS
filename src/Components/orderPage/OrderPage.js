import React from 'react';
import { useParams } from 'react-router-dom';
import OrderProducts from '../OrderProduct/OrderProducts';
import useProducts from '../../Hook/useProducts/useProducts';

const OrderPage = () => {

  const id=useParams();

  const [products]=useProducts();

const orderProduct=products.find(product=>+product.id===parseInt(id.id));

    return (
        <div>
           <div className='bg-light p-5'>
            <h1 className='fw-bold'> Product List</h1>
           <p className='pt-2'>Where flowers are our inspiration</p>
           </div>
           <div className="container mb-5">
               <OrderProducts orderProduct={orderProduct} />
           </div>
        </div>
    );
};

export default OrderPage;