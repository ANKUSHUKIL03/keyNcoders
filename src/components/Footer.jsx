import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
    return (
        <footer className='text-zinc-600 body-font mt-4 md:mt-8'>
            <div className='container mx-auto px-5'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <p className='text-sm md:text-base text-center md:text-left'>
                        ©2024 <br />
                        keyNcoders
                    </p>
                    <span className='inline-flex mt-2 md:mt-0'>
                        <a href='#' className='text-sm md:text-base text-[#111B47] px-3 py-1 md:px-4 md:py-2 bg-[#111B47] rounded-lg hover:bg-[#0E1840]'>
                            Purchase Now
                        </a>
                    </span>
                </div>
                <hr className='w-full mt-3 bg-gray-300' />
                <div className='flex flex-col md:flex-row items-center justify-between py-4'>
                    <p className='text-black font-bold text-base md:text-lg text-center md:text-left mb-4 md:mb-0'>
                        <img
                            src='https://placehold.co/10'
                            alt='Placeholder'
                            className='w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-4 inline-block'
                        />
                        keyNcoders
                    </p>
                    <span className='flex flex-col md:flex-row gap-4 md:gap-8'>
                        <a href='#' className='text-base md:text-lg text-[#120E0E] hover:text-[#111B47]'>About us</a>
                        <a href='#' className='text-base md:text-lg text-[#120E0E] hover:text-[#111B47]'>Batches</a>
                        <a href='#' className='text-base md:text-lg text-[#120E0E] hover:text-[#111B47]'>Contact Us</a>
                    </span>
                    <div className='flex flex-row gap-4 md:gap-8'>
                        <FontAwesomeIcon icon={faFacebook} className='text-[#B0B8BC] h-5 md:h-6' />
                        <FontAwesomeIcon icon={faLinkedin} className='text-[#B0B8BC] h-5 md:h-6' />
                        <FontAwesomeIcon icon={faTwitter} className='text-[#B0B8BC] h-5 md:h-6' />
                        <FontAwesomeIcon icon={faYoutube} className='text-[#B0B8BC] h-5 md:h-6' />
                        <FontAwesomeIcon icon={faInstagram} className='text-[#B0B8BC] h-5 md:h-6' />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
