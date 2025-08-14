import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface HeroProps {
    // Define any props if needed
    // For example, if you want to pass a title or description
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    imageSrc?: string;
    direction?: 'left' | 'right'; // Optional prop to control image direction
    svgElement?: React.ReactNode; // Optional prop for SVG element
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText, buttonLink, imageSrc, direction, svgElement }) => {

  return (
    <div className="hero bg-base-200 min-h-[70vh]">
        <div className={`hero-content flex-col lg:flex-row${direction === 'right' ? '-reverse' : ''}`}>
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
            <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
                {description || "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
            </p>
            <Link href={buttonLink || "#"} className="btn btn-primary rounded-2xl">{buttonText || "Get Started"}</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
