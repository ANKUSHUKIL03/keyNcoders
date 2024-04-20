import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faDownload, faVideo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CourseCaraousel() {
	return (
		<div className='w-[400px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
			<div className='bg-[#B17373] h-48 w-[90%] mt-6 mx-auto rounded-lg'></div>
			<div className='p-4'>
				<div className='text-sm text-zinc-500'>course domain?</div>
				<div className='text-lg font-bold mb-2 dark:text-black'>Course name</div>
				<div className='text-lg text-orange-500 font-bold'>Price</div>
				<hr className='my-3 border-t border-zinc-200' />
				<div className='flex items-center justify-between text-zinc-600 text-sm'>
					<div className='flex items-center'>
						<FontAwesomeIcon icon={faClock} />

						<span className='ml-1'>duration</span>
					</div>
					<div className='flex items-center'>
						<FontAwesomeIcon icon={faVideo} />
						<span className='ml-1'>no: of lect</span>
					</div>
					<div className='flex items-center'>
						<FontAwesomeIcon icon={faDownload} />
						<span className='ml-1'>download</span>
					</div>
				</div>
				<button className='w-full bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-orange-600'>
					Join Course
				</button>
			</div>
		</div>
	);
}

export default CourseCaraousel;
