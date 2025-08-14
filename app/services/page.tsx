import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { FaTools } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";



const ServicesPage = () => {
  return (
    <div className="p-4">
        <h1 className="text-2xl">
            Services
        </h1>

        <p className="text-lg my-2">
            This is the services page. Here you can find a variety of services we offer.
            <br />
            <strong>Explore our services to find what suits your needs!</strong>
        </p>

        <div className="">
          
          <div>
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
        </div>
    </div>
  )
}

export default ServicesPage
