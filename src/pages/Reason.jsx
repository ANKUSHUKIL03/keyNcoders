function Reason() {
	return (
		<section className='flex flex-col mt-[100px] items-center justify-center p-8 '>
			<div className='text-center mb-[200px]'>
				<h2 className='text-3xl font-bold mb-2'>Why Choose KeyNcoder</h2>
				<p className='text-zinc-600'>Lorem Ipsum courses we have? lorem ipsum</p>
			</div>
			<div className='flex justify-center items-center'>
				<div className='relative'>
					<img
						src='https://placehold.co/150'
						alt='Placeholder'
						className='rounded-full w-[300px] h-[270px]  object-cover mx-auto'
					/>
					<p className='text-[30px] absolute text-center w-full  left-1/2 transform -translate-x-1/2 -top-[150px]'>
						lorem ipsum <br /> lorem ipsum
					</p>
					<p className='text-[30px] absolute top-0 right-[-250px] transform rotate-30px'>
						lorem ipsum <br /> lorem ipsum
					</p>
					<p className='text-[30px] absolute bottom-0 right-[-250px] transform rotate-60'>
						lorem ipsum <br /> lorem ipsum
					</p>
					<p className='text-[30px] absolute text-center w-full left-1/2 transform -translate-x-1/2 -bottom-[150px]'>
						lorem ipsum <br /> lorem ipsum
					</p>
					<p className='text-[30px] absolute bottom-0 left-[-250px] transform rotate-[-60]'>
						lorem ipsum <br /> lorem ipsum
					</p>
					<p className='text-[30px] absolute top-0 left-[-250px] transform rotate-[-30px]'>
						lorem ipsum <br /> lorem ipsum
					</p>
				</div>
			</div>
		</section>
	);
}

export default Reason;
