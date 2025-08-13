import Hero from "./components/Hero";
import HeroRight from "./components/HeroRight";


export default function Home() {
  return (
    <main >
      {/* <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/vector-illustration-electrical-circuit-form-printed-circuit-board_1028306-151.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde assumenda tenetur dolor. Dolores officia, 
                unde voluptatibus sunt, quisquam dolore eligendi illum 
                omnis vel laudantium exercitationem possimus quam, nostrum repudiandae illo?
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
      </div> */}


      <div>
        <Hero 
          title="Welcome to Hendricken Hardware"
          description="Your one-stop shop for all hardware needs. Explore our wide range of products and services designed to meet your every requirement."
          buttonText="Shop Now"
          buttonLink="/products"
          imageSrc="/Logo.png" // Replace with your image URL
          direction="left" // Change to "right" if you want the image on the right side
        />
      </div>

      <div>
        <Hero 
          title="Products"
          description="Discover our latest offerings in hardware tools, garden supplies, and more. Quality products at unbeatable prices."
          buttonText="View Products"
          buttonLink="/products"
          imageSrc="/blupura.jpg" // Replace with your image URL
          direction="right" // Change to "left" if you want the image on the left side
        />
      </div>
      <div>
        <Hero 
        title="Services"
        description="We offer a range of services to help you with your hardware needs, from installation to maintenance. Contact us for more details."
        buttonText="Learn More"
        buttonLink="/services"
        imageSrc="/services.jpg" // Replace with your image URL
        direction="left" // Change to "right" if you want the image on the right side
        />
      </div>

    </main>
  );
}
