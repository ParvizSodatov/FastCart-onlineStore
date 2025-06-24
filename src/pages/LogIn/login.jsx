import { TextField } from '@mui/material'
import google from '@/assets/Google.png'
import { Link } from 'react-router'
export default function LogIn() {
	return (
		<>
				<div className='md:w-[30%] px-[40px] m-auto text-start  md:mt-[100px] mt-[30px]  '>
				<div className='sm:w-[100%]'>
					<h1 className='md:text-[45px] text-[35px] text-bold'>Log in to Exclusive</h1>
				<p className='text-[24px]'>Enter your details below</p>
				</div>
				<div className='mt-[20px]'>
					<TextField
						id='outlined-basic'
						label='Email or phone number'
						className='w-[100%]'
						variant='outlined'
						sx={{ mt: '10px' }}
					/>
					<TextField
						id='outlined-basic'
						label='Password'
						className='w-[100%]'
						variant='outlined'
						sx={{ mt: '10px' }}
						type='password'
					/>
					<button className='bg-white text-red-400 w-[100%] h-[2vh] mt-[20px] rounded-[10px]'>
						Forget Password?
					</button>
					<button className='bg-red-400 text-white w-[100%] h-[7vh] mt-[20px] rounded-[10px]'>
						Log In
					</button>
				
				</div>
				
			</div>
		</>
	)
}
