import { Link, Outlet } from 'react-router'
import logo from '../assets/logo.png'
import { Button, Menu, MenuItem, TextField } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
export default function Layout() {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<>
			<nav className='flex md:justify-around items-center mt-[10px]'>
				<div className='flex items-center md:hidden ml-[20px] gap-[10px]'>
					<div>
						<Button
							id='basic-button'
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						>
							<MenuIcon style={{ fontSize: '45px', color: 'black' }} />
						</Button>
						<Menu
							id='basic-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							slotProps={{
								list: {
									'aria-labelledby': 'basic-button',
								},
							}}
						>
							<Link to='/'>
								<MenuItem onClick={handleClose}>Home</MenuItem>
							</Link>
							<Link to='/acount'>
								{' '}
								<MenuItem onClick={handleClose}>My account</MenuItem>
							</Link>
							<Link to='/signUp'>
								<MenuItem onClick={handleClose}>SignUp</MenuItem>
							</Link>
								<Link to='/about'>
								<MenuItem onClick={handleClose}>About</MenuItem>
							</Link>
						</Menu>
					</div>
					<h1 className='text-[35px]'>Exclusive</h1>
				</div>
				<img className='h-[7vh] md:block hidden' src={logo} alt='' />
				<div className=' md:flex justify-center gap-[30px] hidden  '>
					<p className='text-[20px] '>
						<Link to='/'>Home</Link>
					</p>
					<p className='text-[20px] '>
						<Link to='/about'>about</Link>
					</p>
					<p className='text-[20px]'>
						<Link to='/contact'>Contact</Link>
					</p>
					<p className='text-[20px]'>
						<Link to='/signUp'>signUp</Link>
					</p>
				</div>
				<div className='flex items-center justify-center gap-[10px]  w-[300px]'>
					<div className='md:block hidden'>
						<TextField className='' label='search.....' variant='standard' />
					</div>
					<div className='md:block hidden'>
						<Link to='/wishlist'>
							<FavoriteBorderIcon />
						</Link>
					</div>
					<Link to='/cart'>
						<ShoppingCartIcon style={{ fontSize: '35px' }} />
					</Link>
					<div className='md:block hidden'>
						<Link to='/acount'>
							<AccountCircleIcon style={{ fontSize: '35px' }} />
						</Link>
					</div>
				</div>
			</nav>
			<Outlet />
			<footer className='bg-black text-white px-4 md:px-20 py-10 mt-[70px]'>
				<div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 '>
					<div>
						<h2 className='text-lg font-bold mb-4'>Exclusive</h2>
						<p className='mb-2'>Subscribe</p>
						<p className='text-sm mb-4'>Get 10% off your first order</p>
						<div className='flex border border-white rounded-md overflow-hidden'>
							<input
								type='email'
								placeholder='Enter your email'
								className='bg-black px-3 py-2 w-full text-white placeholder-white outline-none'
							/>
							<button className='px-4 flex items-center justify-center border-l border-white'>
								➤
							</button>
						</div>
					</div>
					<div>
						<h2 className='text-lg font-bold mb-4'>Support</h2>
						<p className='text-sm mb-1'>111 Bijoy sarani, Dhaka,</p>
						<p className='text-sm mb-1'>DH 1515, Bangladesh.</p>
						<p className='text-sm mb-1 mt-2'>exclusive@gmail.com</p>
						<p className='text-sm'>+88015-88888-9999</p>
					</div>
					<div>
						<h2 className='text-lg font-bold mb-4'>Account</h2>
						<ul className='space-y-1 text-sm'>
							<li>My Account</li>
							<li>Cart</li>
							<li>Wishlist</li>
							<li>Shop</li>
						</ul>
					</div>
					<div>
						<h2 className='text-lg font-bold mb-4'>Quick Link</h2>
						<ul className='space-y-1 text-sm'>
							<li>Privacy Policy</li>
							<li>Terms Of Use</li>
							<li>FAQ</li>
							<li>Contact</li>
						</ul>
					</div>

					<div>
						<h2 className='text-lg font-bold mb-4'>Social</h2>
						<div className='flex space-x-4 text-xl'>
							<i>
								<FacebookIcon />
							</i>
							<i>
								<TwitterIcon />
							</i>
							<i>
								<InstagramIcon color='white' />
							</i>
							<i>in</i>
						</div>
					</div>
				</div>

				<div className='mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4'>
					© Copyright Rimel 2022. All right reserved
				</div>
			</footer>
		</>
	)
}
