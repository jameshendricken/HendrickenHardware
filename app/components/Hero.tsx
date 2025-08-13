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
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText, buttonLink, imageSrc, direction }) => {

  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className={`hero-content flex-col lg:flex-row${direction === 'right' ? '-reverse' : ''}`}>
            <Image
                src={imageSrc || "/Logo.png"} // Default image if none provided
                alt="Hero Image"
                width={500}
                height={500}
                className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
                {description || "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
            </p>
            <Link href={buttonLink || "#"} className="btn btn-primary">{buttonText || "Get Started"}</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
