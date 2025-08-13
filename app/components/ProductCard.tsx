
import React from 'react'
import Image from 'next/image';

// ProductCard component


interface ProductCardProps {
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title }) => {
  return (
    <div className="card bg-base-200 w-96 shadow-md p-3 rounded-lg">
      
      <figure>
        <Image
          src="/blupura.jpg"
          alt="blupura"
          width={200}
          height={200}
          className="rounded-lg shadow-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <button className="btn btn-primary">More Info</button>
      </div>
    </div>
  )
}

export default ProductCard
