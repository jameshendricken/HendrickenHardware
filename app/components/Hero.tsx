import React from 'react'
import Image from 'next/image'

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

const Hero: React.FC<HeroProps> = ({ title, description, imageSrc, svgElement }) => {

  return (
    <div className="min-h-[80vh]">
        <div className="hero-content flex-col justify-center items-center">
            {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt="Product Image"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-2xl m-2"
                            />
                        ) : svgElement ? (
                            <div className="h-20 w-20 flex items-center justify-center">
                                {svgElement}
                            </div>
                        ) : null}
            <div>
            <h1 className="text-5xl font-bold text-center ">{title}</h1>
            <p className="py-6 text-center">
                {description || "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
            </p>
            {/* <Button>
                <Link href={buttonLink || "#"} className="rounded-2xl">{buttonText || "Get Started"}</Link>
            </Button> */}
            
            </div>
        </div>
    </div>
  )
}

export default Hero
