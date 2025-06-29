import { Link, Outlet, useLocation } from 'react-router'
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
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '@/store/reducers/product/reducer'
export default function Layout() {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const { cart } = useSelector(store => store.cart)
	const product = JSON.parse(localStorage.getItem('wish'))
  const [search,setSearch]=useState('')
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
  const dispatch=useDispatch()
  const location=useLocation()


  function handleSearch(e){
    setSearch(e.target.value)
    dispatch(searchProduct(e.target.value))
  }

  function LogOut(){
    localStorage.removeItem('token')
  }

const token=localStorage.getItem('token')

   const [anchorEl2, setAnchorEl2] =useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClickAcount = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseAcount = () => {
    setAnchorEl2(null);
  };


	return (
		<>
			<nav className='fixed top-0 left-0 w-full z-50 bg-white shadow-md flex md:justify-around items-center py-4'>
  {/* Мобайл: меню и логотип */}
  <div className='flex items-center md:hidden ml-[20px] gap-[10px]'>
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#f43f5e',
          },
        }}
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
          <MenuItem
            onClick={handleClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f43f5e',
                color: 'white',
              },
            }}
          >
            Home
          </MenuItem>
        </Link>
        <Link to='/acount'>
          <MenuItem
            onClick={handleClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f43f5e',
                color: 'white',
              },
            }}
          >
            My account
          </MenuItem>
        </Link>
        <Link to='/signUp'>
          <MenuItem
            onClick={handleClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f43f5e',
                color: 'white',
              },
            }}
          >
            SignUp
          </MenuItem>
        </Link>
        <Link to='/about'>
          <MenuItem
            onClick={handleClose}
            sx={{
              '&:hover': {
                backgroundColor: '#f43f5e',
                color: 'white',
              },
            }}
          >
            About
          </MenuItem>
        </Link>
      </Menu>
    </div>
    <h1 className='text-[35px] font-bold hover:text-rose-500 transition-colors duration-300'>
      Exclusive
    </h1>
  </div>

  {/* Десктоп: логотип */}
  <img className='h-[7vh] md:block hidden' src={logo} alt='logo' />

  {/* Десктоп: навигация */}
  <div className='md:flex justify-center gap-[30px] hidden'>
    <p className='text-[20px] hover:text-rose-500 transition-colors duration-300'>
      <Link to='/'>Home</Link>
    </p>
    <p className='text-[20px] hover:text-rose-500 transition-colors duration-300'>
      <Link to='/about'>About</Link>
    </p>
    <p className='text-[20px] hover:text-rose-500 transition-colors duration-300'>
      <Link to='/contact'>Contact</Link>
    </p>
    <p className='text-[20px] hover:text-rose-500 transition-colors duration-300'>
      <Link to='/signUp'>SignUp</Link>
    </p>
  </div>

  {/* Иконки: поиск, wishlist, корзина, аккаунт */}
  <div className='flex items-center justify-center gap-[10px] w-[300px]'>

    {location.pathname==='/products'&&(
      <div className='md:block hidden'>
      <TextField
        label='search.....'
        value={search}
        onChange={(e)=>handleSearch(e)}

        variant='standard'
        sx={{
          '& .MuiInput-underline:after': {
            borderBottomColor: '#f43f5e',
          },
        }}
      />
    </div>
    )

    }

    {/* ❤️ Wishlist – Десктоп */}
    <div className='relative md:block hidden hover:text-rose-500 transition-colors duration-300'>
      <Link to='/wishlist'>
        <FavoriteBorderIcon style={{ fontSize: '30px' }} />
        {product != '' && product != null && product.length > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-semibold rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-md'>
            {product.length}
          </span>
        )}
      </Link>
    </div>
   
    <div className='relative md:hidden hover:text-rose-500 transition-colors duration-300'>
      <Link to='/wishlist'>
        <FavoriteBorderIcon style={{ fontSize: '30px' }} />
        {product != '' && product != null && product.length > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-semibold rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-md'>
            {product.length}
          </span>
        )}
      </Link>
    </div>

    {/* 🛒 Корзина */}
    {
      token && <div className='relative hover:text-rose-500 transition-colors duration-300'>
      <Link to='/cart'>
        <ShoppingCartIcon style={{ fontSize: '30px' }} />
        {cart?.productsInCart?.length > 0 && (
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-semibold rounded-full w-[20px] h-[20px] flex items-center justify-center shadow-md'>
            {cart.productsInCart.length}
          </span>
        )}
      </Link>
    </div>
    }

    {/* 👤 Аккаунт */}
   {
    token &&  <div className='md:block hidden hover:text-rose-500 transition-colors duration-300'>
     <AccountCircleIcon
       sx={{fontSize:'30px'}}
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClickAcount}
      >
        Dashboard
      </AccountCircleIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleCloseAcount}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
       <Link to='/acount'> <MenuItem onClick={handleCloseAcount}>My Acount</MenuItem></Link>
        <MenuItem onClick={LogOut}>Log Out</MenuItem>
      </Menu>
    </div>
   }
  </div>
</nav>


			<main className='pt-[80px]'>
				<Outlet />
			</main>

			<footer className='bg-black text-white px-4 md:px-20 py-10 mt-[70px]'>
				<div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8'>
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
							<i><FacebookIcon /></i>
							<i><TwitterIcon /></i>
							<i><InstagramIcon /></i>
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
