import React from 'react';
import useProducts from '../../Hook/useProducts/useProducts';
import Product from '../Product/Product';
import '../../Style/Products.css'


const Products = () => {

    const [products, setProducts]=useProducts();
    return (
        <div className=' shadow-sm pb-5'>
            <div className="container">
                <h2 className='text-center pt-4 pb-2' >Our best product</h2>
                <div className='row row-cols-lg-4 row-cols-md-2 g-4  '>
                    {
                        products.map(product=><Product 
                            product={product} 
                            key={product.id} 
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;