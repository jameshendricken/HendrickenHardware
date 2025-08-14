
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// ProductCard component


interface ProductCardProps {
  title: string;
  description?: string; // Optional prop for description
  productLink?: string; // Optional prop for product link
  imageSrc?: string; // Optional prop for image source
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, productLink, imageSrc }) => {
  return (
    <div className="card max-w-96 shadow-md p-3 rounded-lg hover:shadow-2xl transition-shadow duration-300">
      
      <figure>
        <Image
          src={imageSrc || "/default-image.jpg"} // Default image if none provided
          alt="Product Image"
          width={200}
          height={200}
          className="rounded-lg shadow-2xl m-2 "
        />
      </figure>
      <div className="card-body pt-2">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-500 text-justify">
          {description || "No description available."}
        </p>
        <Button>
          <Link href={productLink || "#"} className="rounded-2xl">View Product</Link>
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
