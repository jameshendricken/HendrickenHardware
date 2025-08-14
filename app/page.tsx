import Card from "./components/card";
import { DarkModeToggle } from "./components/DarkModeToggle";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <main >
      <DarkModeToggle/>
      <div className=" pb-4">
        <Hero 
          title="Welcome to Hendricken Hardware"
          description="Your one-stop shop for all hardware needs. Explore our wide range of products and services designed to meet your every requirement."
          buttonText="Shop Now"
          buttonLink="/products"
          imageSrc="/Logo.png" // Replace with your image URL
          direction="left" // Change to "right" if you want the image on the right side
        />
      </div>
      
      <div className="pb-4">
        <Card 
          title="Products"
          description="Discover our latest offerings in hardware tools, garden supplies, and more. Quality products at unbeatable prices."
          buttonText="View Products"
          buttonLink="/products"
          imageSrc="/blupura.jpg" // Replace with your image URL
          direction="right" // Change to "left" if you want the image on the left side
        />
      </div>
      <div>
        <Card 
        title="Services"
        description="We offer a range of services to help you with your hardware needs, from installation to maintenance. Contact us for more details."
        buttonText="Learn More"
        buttonLink="/services"
        imageSrc="/Logo.png" // Replace with your image URL
        direction="left" // Change to "right" if you want the image on the right side
        />
      </div>

      

    </main>
  );
}
