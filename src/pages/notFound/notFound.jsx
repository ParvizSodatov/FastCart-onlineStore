import { Link } from 'react-router'

export default function NotFound() {
	return (
		<>
			<div className=' text-center w-[50%] m-auto mt-[130px]'>
				<h1 className='text-[100px]'>404 Not Found</h1>
				<p className='text-[25px] mt-[50px]'>
					Your visited page not found. You may go home page.
				</p>
			<Link to='/'>
				<button className='bg-red-400 text-white w-[30%] p-[10px] rounded-[5px] mt-[50px]'>
					Back to home page
					
				</button>
			</Link>
			</div>
		</>
	)
}
