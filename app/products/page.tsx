import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
  return (
    <div className="p-4 mx-9">
        <h1 className="text-2xl">
            Products
        </h1>

        <p className="mt-2">
            This is the products page. Here you can find a variety of items we offer.
            <br />
            <strong>Check out our latest products!</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-10 mx-10 mt-10">
          
          <div>
              <ProductCard title="Hendricken Hardware Tools" />
          </div>
          <div>
              <ProductCard title="Garden Supplies" />
          </div>
          <div>
              <ProductCard title="Blupura Water Cooler" />
          </div>

        </div>
      
    </div>
  )
}

export default ProductsPage
