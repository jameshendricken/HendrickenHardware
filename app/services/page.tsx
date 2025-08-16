import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { FaTools } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaBottleWater } from "react-icons/fa6";




const ServicesPage = () => {
  return (
    <div className="">
        <h1 className="text-2xl">
            Services
        </h1>

        <p className="text-lg my-2">
            This is the services page. Here you can find a variety of services we offer.
            <br />
            <strong>Explore our services to find what suits your needs!</strong>
        </p>

        <div className="pt-4">
          
          <div className=''>
              <ServiceCard title="Installation Services" 
              description="We offer professional installation services for all our products, ensuring they are set up correctly and efficiently."
              svgElement={<FaTools 
              size={80}/>}
              />
          </div>

          <div>
              <ServiceCard title="Service and Maintenance"
              description="Our team provides ongoing service and maintenance to keep your hardware in top condition."
              svgElement={<MdOutlineHomeRepairService 
              size={80}/>} />
          </div>

          <div>
              <ServiceCard title="Monitoring of Water Dispenser"
              description="Our custom package can be installed into you existing water dispenser to track the usage of your consumers."
              svgElement={<FaBottleWater
              size={80}/>} />
          </div>
        </div>
    </div>
  )
}

export default ServicesPage
