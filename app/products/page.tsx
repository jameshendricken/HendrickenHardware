import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
  return (
    <div className="p-4">
        <h1 className="text-2xl">
            Products
        </h1>

        <p className="text-lg my-2">
            This is the products page. Here you can find a variety of items we offer.
            <br />
            <strong>Check out our latest products!</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-10 mx-10 my-2 mt-10 h-max">
          
          <div>
              <ProductCard 
              title="BluePura Water Bottle Filler"
              description='The wall-mounted still and sparkling water dispenser offers a unique and innovative design, 
              suitable for any type of installation. It is the perfect combination of elegance and functionality, 
              ideal for offices, homes, residences, prestigious condominiums and hotels. Wall is also a perfect solution for schools, 
              hospitals and any environment where the installation of floor standing coolers is not possible for safety reasons. 
              It has 1 or 2 mechanical buttons in stainless steel and is made of high quality materials such as stainless steel and anodised aluminium. 
              It can be connected to any type of under-counter chiller, offering installation flexibility.' 
              imageSrc="/blupura.jpg" 
              />
          
          </div>
          <div>
              <ProductCard title="Niagra Top 180"
              description ='Niagara TOP 180 is a 180 liter water dispenser with ice bank technology, designed for over-the-counter application in large 
                            restaurants and cafes. It allows single or simultaneous dispensing of water at room temperature and cold, still or sparkling.' 
              imageSrc='/NT180-1.png'
              />
          </div>
          <div>
              <ProductCard title="Soprano Flat"
              description ='The FLAT Cooler-Carbonator sets new standards within the sector with
                            its innovative 4.0 technology, unique, elegant design and compact size.
                            For a whole new experience: in the office, in the studio, at home… wherever you want.' 
              imageSrc='/sopranoFlat.jpg'              
              />
          </div>

          {/* <div>
              <ProductCard title="Hendricken Hardware Tools" />
          </div>
          <div>
              <ProductCard title="Garden Supplies" />
          </div>
          <div>
              <ProductCard title="Blupura Water Cooler" />
          </div> */}

        </div>
      
    </div>
  )
}

export default ProductsPage
