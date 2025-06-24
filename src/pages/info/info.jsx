import j1 from '@/assets/j1.png'
import j2 from '@/assets/j2.png'
import j3 from '@/assets/j3.png'
import j4 from '@/assets/j4.png'
import j5 from '@/assets/j5.png'
import computer from '@/assets/computer.png'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button } from '@mui/material'
export default function Info() {
	return (
		<>
			<h1 className='text-gray-500 ml-[100px] mt-[70px]'>
				Account/Garming{' '}
				<span className='text-black'>Havic HV G-92 Gamepad</span>
			</h1>
			<section className='md:flex :justify-around flex-wrap items-center mt-[60px]'>
				<aside className='flex items-center  md:w-[50%] justify-center text-start m-auto px-[20px]'>
					<div>
						<img src={j1} alt='' />
						<img src={j5} alt='' />
						<img src={j3} alt='' />
						<img src={j4} alt='' />
					</div>
					<img src={j2} alt='' />
				</aside>

				<aside className='md:w-[30%] m-auto w-[80%]'>
					<h1 className='text-[40px]'>Havic HV G-92 Gamepad</h1>
					<br />
					<br />
					<h1 className='text-[50px] font-bold'>$192.00</h1>
					<h1 className='text-[22px] text-gray-400 mt-[30px]'>
						PlayStation 5 Controller Skin High quality vinyl with air channel
						adhesive for easy bubble free install & mess free removal Pressure
						sensitive.
					</h1>
					{/* <p className='text-[20px] mt-[20px]'>colors:</p> */}
					<div className='md:flex item-center gap-[15px] mt-[20px]  hidden'>
						<span className='text-[30px]'>Size:</span>
						<button className='border-[1px] border-solid border-black px-[15px] text-[20px]'>
							xs
						</button>
						<button className='border-[1px] border-solid border-black px-[15px] text-[20px]'>
							m
						</button>
						<button className='border-[1px] border-solid border-black px-[15px] text-[20px] bg-red-400 text-white'>
							s
						</button>
						<button className='border-[1px] border-solid border-black px-[15px] text-[20px]'>
							xs
						</button>
						<button className='border-[1px] border-solid border-black px-[15px] text-[20px]'>
							l
						</button>
					</div>{' '}
					<div className='mt-[20px] md:block hidden'>
						<Button
							sx={{ border: '1px solid black', color: 'black' }}
							variant='outlined'
						>
							-
						</Button>
						<Button
							sx={{ color: 'black', border: '1px solid black' }}
							variant='outlined'
						>
							2
						</Button>
						<Button
							sx={{
								backgroundColor: '#DB4444',
								color: 'white',
								border: '1px solid black',
							}}
							variant='outlined'
						>
							+
						</Button>
					</div>
				</aside>
			</section>
			<section className='flex md:justify-around flex-wrap  m-w-[1200px] mt-[50px]'>
				<div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					<div className='flex justify-between items-center'>
						<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
							-15%
						</span>
						<div>
							{/* <FavoriteBorderIcon /> */}
							<br />
							{/* <VisibilityIcon /> */}
						</div>
					</div>
					<div className='flex flex-col'>
						<img
							src={computer}
							className='h-[150px] w-full object-contain mb-2'
						/>
						<Button variant='outlined' color='inherit'>
							Add To Card
						</Button>
					</div>
					<h3 className='text-sm font-semibold mt-[10px]'>
						IPS LCD Gaming Monitor
					</h3>
					<p className='text-red-500 font-bold'>$370</p>
					<p className=''>⭐⭐⭐⭐⭐(75)</p>
				</div>
				<div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					<div className='flex justify-between items-center'>
						<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
							-15%
						</span>
						<div>
							{/* <FavoriteBorderIcon /> */}
							<br />
							{/* <VisibilityIcon /> */}
						</div>
					</div>
					<div className='flex flex-col'>
						<img
							src={computer}
							className='h-[150px] w-full object-contain mb-2'
						/>
						<Button variant='outlined' color='inherit'>
							Add To Card
						</Button>
					</div>
					<h3 className='text-sm font-semibold mt-[10px]'>
						IPS LCD Gaming Monitor
					</h3>
					<p className='text-red-500 font-bold'>$370</p>
					<p className=''>⭐⭐⭐⭐⭐(75)</p>
				</div>
				<div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					<div className='flex justify-between items-center'>
						<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
							-15%
						</span>
						<div>
							{/* <FavoriteBorderIcon /> */}
							<br />
							{/* <VisibilityIcon /> */}
						</div>
					</div>
					<div className='flex flex-col'>
						<img
							src={computer}
							className='h-[150px] w-full object-contain mb-2'
						/>
						<Button variant='outlined' color='inherit'>
							Add To Card
						</Button>
					</div>
					<h3 className='text-sm font-semibold mt-[10px]'>
						IPS LCD Gaming Monitor
					</h3>
					<p className='text-red-500 font-bold'>$370</p>
					<p className=''>⭐⭐⭐⭐⭐(75)</p>
				</div>
				<div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					<div className='flex justify-between items-center'>
						<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
							-15%
						</span>
						<div>
							{/* <FavoriteBorderIcon /> */}
							<br />
							{/* <VisibilityIcon /> */}
						</div>
					</div>
					<div className='flex flex-col'>
						<img
							src={computer}
							className='h-[150px] w-full object-contain mb-2'
						/>
						<Button variant='outlined' color='inherit'>
							Add To Card
						</Button>
					</div>
					<h3 className='text-sm font-semibold mt-[10px]'>
						IPS LCD Gaming Monitor
					</h3>
					<p className='text-red-500 font-bold'>$370</p>
					<p className=''>⭐⭐⭐⭐⭐(75)</p>
				</div>
			</section>
		</>
	)
}
