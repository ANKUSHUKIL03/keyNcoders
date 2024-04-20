import React from "react";
import Footer from "../components/Footer";

function CallToAction() {
	return (
		<div className='flex flex-col min-h-screen'>
			<section className='mt-8 md:mt-16 flex-grow'>
				<h1 className='font-semibold text-2xl md:text-3xl text-center mt-[120px]'>
					Companies Affiliated with <br /> keyNcoders
				</h1>
				<p className='mt-4 text-base md:text-lg text-[#8A8A8A] text-center'>
					Lorem Ipsum courses we have? lorem ipsum
				</p>
				<div className='w-full mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center md:items-stretch '>
					<div className='h-[200px] md:h-[300px] w-[80%] md:w-[300px] bg-black text-white rounded-lg text-center mb-4 md:mb-0 md:mr-4'>
						Company name/logo
					</div>
					<div className='h-[200px] md:h-[300px] w-[80%] md:w-[300px] bg-black text-white rounded-lg text-center'>
						Company name/logo
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default CallToAction;
