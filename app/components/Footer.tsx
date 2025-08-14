import React from 'react'
import { RiWaterFlashFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-primary text-base-content p-10">
        <aside>
        <RiWaterFlashFill className="text-5xl text-primary mb-2" />
        <p>
            <strong>Hendricken Hardware Ltd.</strong>
            <br />
            Innovation in every drop
        </p>
        </aside>
        <div className="hidden lg:flex lg:flex-row lg:justify-between lg:gap-20">

            <nav className="flex flex-col lg:py-1">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
        
    </footer>
  )
}

export default Footer
