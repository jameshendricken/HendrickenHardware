import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description?: string; // Optional prop for description
  imageSrc?: string; // Optional prop for image source
  svgElement?: React.ReactNode; // Optional prop for SVG element

}

const ServiceCard: React.FC<ServiceCardProps> = ({title, description, imageSrc, svgElement}) => {
  return (
    <div className="card lg:card-side bg-card shadow-sm mt-4">
        <figure className='pt-4'>
            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt="Product Image"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-2xl m-2"
                />
            ) : svgElement ? (
                <div className="h-20 w-20 flex items-center justify-center">
                    {svgElement}
                </div>
            ) : null}
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            
            </div>
        </div>
    </div>
  )
}

export default ServiceCard
