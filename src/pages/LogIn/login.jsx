import { TextField } from '@mui/material'
import google from '@/assets/Google.png'
import {  useNavigate } from 'react-router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Login } from '@/store/reducers/login/reducers'
export default function LogIn() {
	const [putName, setPutName] = useState('')
	const [putPassword, setPutPassword] = useState('')
	const navigate=useNavigate()
	const dispatch=useDispatch()
	// const navigate=useNavigate()
   async function handleLogin(){
		let newLogin={
			userName:putName,
			password:putPassword
		}
		const result=await dispatch(Login(newLogin))
		if(Login.fulfilled.match(result)){
			
        navigate('/')
		  localStorage.setItem('wish',JSON.stringify([]))
     
		}
	}
	return (
		<>
			<div className='md:w-[30%] px-[40px] m-auto text-start  md:mt-[100px] mt-[30px]  '>
				<div className='sm:w-[100%]'>
					<h1 className='md:text-[45px] text-[35px] text-bold'>
						Log in to Exclusive
					</h1>
					<p className='text-[24px]'>Enter your details below</p>
				</div>
				<div className='mt-[20px]'>
					<TextField
						id='outlined-basic'
						label='Name'
						value={putName}
						onChange={(e)=>setPutName(e.target.value)}
						className='w-[100%]'

						variant='outlined'
						sx={{ mt: '10px' }}
					/>
					<TextField
						id='outlined-basic'
						label='Password'
						value={putPassword}
						onChange={(e)=>setPutPassword(e.target.value)}
						className='w-[100%]'
						variant='outlined'
						sx={{ mt: '10px' }}
						autoComplete="new-password"
						type='password'
					/>
					<button className='bg-white text-red-400 w-[100%] h-[2vh] mt-[20px] rounded-[10px]'>
						Forget Password?
					</button>
				<button
  onClick={handleLogin}
  className="bg-red-400 text-white w-[100%] h-[7vh] mt-[20px] rounded-[10px] hover:bg-red-600 transition-colors duration-300"
>
  Log In
</button>

				</div>
			</div>
		</>
	)
}
