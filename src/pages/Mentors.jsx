import MentorCard from "../components/MentorCard";

function Mentors() {
	return (
		<section className='max-h-full mt-8 md:mt-16'>
			<h1 className='text-3xl md:text-4xl font-sans font-semibold text-center'>
				Lorem Ipsum
			</h1>
			<p className='mt-4 text-[#8A8A8A] text-center text-base md:text-lg'>
				Lorem Ipsum courses we have? lorem ipsum
			</p>
			<div className='flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-12 mt-8 md:mt-12'>
				<MentorCard />
                <MentorCard />
			</div>
		</section>
	);
}

export default Mentors;
