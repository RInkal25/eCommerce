import React, { useState, useEffect, useContext } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import { ShopContext } from '../context/ShopContext'

const BestSelling = () => {

  const { products } = useContext(ShopContext);

  const [bestSelling, setBestSelling] = useState([]);
 
  useEffect(() => {
    const bestSellingProducts = products.filter((item) => (item.bestseller));
    setBestSelling(bestSellingProducts.slice(0, 5));
  }, []);

  return (
    <div className='my-10'>
            {/* Best Selling Products */}
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        bestSelling.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
      </div>
    </div>
  )
}

export default BestSelling