import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // базовые стили
import 'swiper/css/autoplay' // для автоперехода
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Autoplay, Navigation } from 'swiper/modules'
import iphone from '@/assets/iphone.png'

import kalonka from '@/assets/kalonka.png'
import 'swiper/css/navigation'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import camera from '@/assets/Camera.png'
import f1 from '@/assets/f1.png'
import i5 from '@/assets/i5.png'
import i6 from '@/assets/i6.png'
import p1 from '@/assets/p1.png'
import p2 from '@/assets/p2.png'
import sam2 from '@/assets/sam2.png'
import p3 from '@/assets/p3.png'
import p4 from '@/assets/p4.png'
import fgg from '@/assets/fgg.png'
import oo from '@/assets/oo.png'
import rek2 from '@/assets/rek2.jpg'
import xiaomi from '@/assets/xiaomi.jpg'
import sony from '@/assets/sony.jpg'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { get } from '@/store/reducers/categories/reducer'
import { getProduct } from '@/store/reducers/product/reducer'
import { addToCart } from '@/store/reducers/cartslice/reducer'
import { toast, Toaster } from 'sonner'
import {
	addWishList,
	removefromWishList,
} from '@/store/reducers/wishlist/reducers'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Wishlist from '../wishlist/wishlist'
export default function Home() {
	const calculateTimeLeft = () => {
		const targetDate = new Date('2025-07-01T00:00:00') // замени на нужную дату
		const now = new Date()
		const difference = targetDate - now

		let timeLeft = {
			days: '00',
			hours: '00',
			minutes: '00',
			seconds: '00',
		}
		if (difference > 0) {
			timeLeft = {
				days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
					2,
					'0'
				),
				hours: String(
					Math.floor((difference / (1000 * 60 * 60)) % 24)
				).padStart(2, '0'),
				minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
					2,
					'0'
				),
				seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
			}
		}
		return timeLeft
	}
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => clearInterval(timer)
	}, [])
	const { data } = useSelector(store => store.category)
	const { prod } = useSelector(store => store.product)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(get())
		dispatch(getProduct())
	}, [])
	const navigate = useNavigate()
	function handleAddToCart(id) {
		const token = localStorage.getItem('token')
		if (!token) {
			alert('Please registraro or login for adding product to the cart')
			navigate('/signUp')
			return
		}
		dispatch(addToCart(id))
	}
	const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
	const toggleWishList = product => {
		if (localStorage.getItem('token') == null) {
			alert('please login')
			return
		}
		const exits = wishlist.some(item => item.id === product.id)
		if (exits) {
			dispatch(removefromWishList(product.id))
			toast.info('Продукт удалён из WishList')
		} else {
			dispatch(addWishList(product))
			toast.success('Добавлено в Wishlist')
		}
	}
	// const exits =wishlist.some(item => item.id === product.id)
	return (
		<>
			<section className='w-[100%] md:flex items-center justify-around md:mt-[50px] px-[10px]'>
				<div className='w-[20%] md:block hidden flex flex-col gap-[50px]'>
					{data?.map(el => (
						<div className='py-[8px]'>
							<p className='text[18px] text-gray-700 font-medium hover:text-blue-600 hover:underline cursor-pointer transition-all duration-200'>
								<Link to={'/categoryById/' + el.id}>{el.categoryName}</Link>
							</p>
						</div>
					))}
				</div>
				<div className='flex md:hidden overflow-x-auto whitespace-nowrap gap-2 px-2 mt-2'>
					{data?.map(el => (
						<Link to={'/categoryById/' + el.id}>
							<span
								key={el.id}
								className='inline-block bg-gray-300 text-[16px] px-3 py-2 rounded cursor-pointer'
								title={el.categoryName}
							>
								{el.categoryName}
							</span>
						</Link>
					))}
				</div>

				<div className=' max-w-[900px]  px-[5px] md:px-0 mt-[10px]'>
					<Swiper
						modules={[Autoplay]}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						loop={true}
						spaceBetween={30}
						slidesPerView={1}
					>
						<SwiperSlide>
							<img src={iphone} alt='Фото 1' className='w-full rounded-xl md:h-[53vh] h-[25vh]' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={rek2} alt='Фото 2' className='w-full rounded-xl md:h-[53vh] h-[25vh]' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={sam2} alt='Фото 3' className='w-full rounded-xl md:h-[53vh] aspect-ratio h-[25vh]' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={xiaomi} alt='Фото 3' className='w-full rounded-xl md:h-[53vh] h-[25vh]' />
						</SwiperSlide>
					</Swiper>
				</div>
			</section>

			<section className='md:flex items-end md:ml-[80px] hidden mt-[60px]'>
				<div className='text-[44px]'>
					<h1 className='text-red-500'>Today’s</h1>
					<h1>Flash Sales</h1>
				</div>
				<div className='flex justify-around items-center text-[44px] gap-[16px] md:ml-[50px]'>
					<div className='text-center'>
						<h1 className='text-[17px]'>Days</h1>
						<h1>{timeLeft.days}</h1>
					</div>
					<h1>:</h1>
					<div className='text-center'>
						<h1 className='text-[17px]'>Hours</h1>
						<h1>{timeLeft.hours}</h1>
					</div>
					<h1>:</h1>
					<div className='text-center'>
						<h1 className='text-[17px]'>Minutes</h1>
						<h1>{timeLeft.minutes}</h1>
					</div>
					<h1>:</h1>
					<div className='text-center'>
						<h1 className='text-[17px]'>Seconds</h1>
						<h1>{timeLeft.seconds}</h1>
					</div>
				</div>
			</section>
			{/* <section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2} // для маленького экрана — по 1.2 карточки
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
								<div className='flex justify-between items-center mb-2'>
									<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
										-40%
									</span>
									<div className='text-gray-600 flex flex-col items-center gap-1'>
										{exits?(
											<FavoriteIcon
											sx={{color:'red'}}
											onClick={() => toggleWishList(el)}
											className='cursor-pointer hover:text-red-500'
										/>
										):(
											<FavoriteBorderIcon
											onClick={() => toggleWishList(el)}
											className='cursor-pointer hover:text-red-500'
										/>
										)

										}
										<Link to={'/info/' + el.id}>
											<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
										</Link>
									</div>
								</div>

								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[140px] w-full object-contain mb-3'
									/>
									<Button
										variant='outlined'
										color='inherit'
										size='small'
										onClick={() => handleAddToCart(el.id)}
										className='!text-xs'
									>
										Add To Cart
									</Button>
								</div>

								<h3 className='text-sm font-semibold mt-2 text-center truncate'>
									{el.productName}
								</h3>
								<p className='text-red-500 font-bold text-center'>
									{el.price}$
								</p>
								<p className='text-center text-xs text-yellow-500'>
									⭐⭐⭐⭐⭐ (90)
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section> */}
			<section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2}
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => {
						const isWished = wishlist.some(item => item.id === el.id)
						return (
							<SwiperSlide key={el.id}>
								<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
									<div className='flex justify-between items-center mb-2'>
										<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
											-40%
										</span>
										<div className='text-gray-600 flex flex-col items-center gap-1'>
											{isWished ? (
												<FavoriteIcon
													sx={{ color: 'red' }}
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											) : (
												<FavoriteBorderIcon
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											)}
											<Link to={'/info/' + el.id}>
												<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
											</Link>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<img
											src={`http://37.27.29.18:8002/images/${el.image}`}
											className='h-[140px] w-full object-contain mb-3'
										/>
										<Button
											variant='outlined'
											color='inherit'
											size='small'
											onClick={() => handleAddToCart(el.id)}
											className='!text-xs'
										>
											Add To Cart
										</Button>
									</div>

									<h3 className='text-sm font-semibold mt-2 text-center truncate'>
										{el.productName}
									</h3>
									<p className='text-red-500 font-bold text-center'>
										{el.price}$
									</p>
									<p className='text-center text-xs text-yellow-500'>
										⭐⭐⭐⭐⭐ (90)
									</p>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>

			<div className='flex justify-center mt-[100px]'>
				<Link to='/products'>
					<button className='relative overflow-hidden group bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-[18px] px-[60px] py-[12px]  shadow-lg hover:shadow-2xl transition duration-300'>
						<span className='absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition duration-300'></span>
						View All Products
					</button>
				</Link>
			</div>
			<section className='mt-[60px] max-w-[1400px] m-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					spaceBetween={12}
					slidesPerView={2}
					breakpoints={{
						480: { slidesPerView: 2.5 },
						640: { slidesPerView: 3 },
						768: { slidesPerView: 4 },
						1024: { slidesPerView: 5 },
						1280: { slidesPerView: 6 },
					}}
					className='w-[95%] mx-auto py-6'
				>
					{data?.map(item => (
						<SwiperSlide key={item.id}>
							<Link to={'/categoryById/' + item.id}>
								<div className='bg-white rounded-xl border border-gray-300 shadow-sm flex flex-col items-center justify-center py-4 h-[180px]  hover:scale-105 transition-transform duration-300'>
									<img
										src={`http://37.27.29.18:8002/images/${item.categoryImage}`}
										alt=''
										className='h-[70px] object-contain w-[100px]'
									/>
									<h1 className='text-[16px] font-semibold mt-3'>
										{item.categoryName}
									</h1>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<div className='ml-[100px] mt-[30px] md:block hidden'>
				<h1 className='text-red-500 text-[45px] '>This Month</h1>
				<h1 className='font-bold text-[30px] mt-[10]'>Best Selling Products</h1>
			</div>

			{/* <section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2}
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
								<div className='flex justify-between items-center mb-2'>
									<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
										-40%
									</span>
									<div className='text-gray-600 flex flex-col items-center gap-1'>
										<FavoriteBorderIcon
											onClick={() => toggleWishList(el)}
											className='cursor-pointer hover:text-red-500'
										/>
										<Link to={'/info/' + el.id}>
											<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
										</Link>
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[140px] w-full object-contain mb-3'
									/>
									<Button
										variant='outlined'
										color='inherit'
										size='small'
										onClick={() => handleAddToCart(el.id)}
										className='!text-xs'
									>
										Add To Cart
									</Button>
								</div>

								<h3 className='text-sm font-semibold mt-2 text-center truncate'>
									{el.productName}
								</h3>
								<p className='text-red-500 font-bold text-center'>
									{el.price}$
								</p>
								<p className='text-center text-xs text-yellow-500'>
									⭐⭐⭐⭐⭐ (90)
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section> */}
			<section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2}
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => {
						const isWished = wishlist.some(item => item.id === el.id)
						return (
							<SwiperSlide key={el.id}>
								<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
									<div className='flex justify-between items-center mb-2'>
										<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
											-40%
										</span>
										<div className='text-gray-600 flex flex-col items-center gap-1'>
											{isWished ? (
												<FavoriteIcon
													sx={{ color: 'red' }}
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											) : (
												<FavoriteBorderIcon
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											)}
											<Link to={'/info/' + el.id}>
												<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
											</Link>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<img
											src={`http://37.27.29.18:8002/images/${el.image}`}
											className='h-[140px] w-full object-contain mb-3'
										/>
										<Button
											variant='outlined'
											color='inherit'
											size='small'
											onClick={() => handleAddToCart(el.id)}
											className='!text-xs'
										>
											Add To Cart
										</Button>
									</div>

									<h3 className='text-sm font-semibold mt-2 text-center truncate'>
										{el.productName}
									</h3>
									<p className='text-red-500 font-bold text-center'>
										{el.price}$
									</p>
									<p className='text-center text-xs text-yellow-500'>
										⭐⭐⭐⭐⭐ (90)
									</p>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>

			<section className='flex md:justify-around flex-col md:flex-row items-center bg-black py-[40px] w-[90%] m-auto rounded-[10px] mt-[100px]'>
				<aside className='flex flex-col gap-[30px] md:w-[30%] ml-[10px] px-[10px]'>
					<h1 className='text-green-500 text-[20px]'>Categories</h1>
					<h1 className='text-white text-[40px]'>
						Enhance Your Music Experience
					</h1>
					<img src={f1} alt='' />
					<Button
						variant='outlined'
						sx={{
							backgroundColor: '#00FF66',
							color: 'black',
							width: '150px',
							padding: '10px 15px',
						}}
					>
						Buy Now!
					</Button>
				</aside>
				<img className='mt-[60px]' src={kalonka} alt='' />
			</section>
			<div className='ml-[140px] mt-[40px] hidden md:block'>
				<h1 className='text-red-400 text-[20px] font-bold'>Our Products</h1>
				<h1 className='text-[50px]'>Explore Our Products</h1>
			</div>

			{/* <section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2} // для маленького экрана — по 1.2 карточки
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
								<div className='flex justify-between items-center mb-2'>
									<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
										-40%
									</span>
									<div className='text-gray-600 flex flex-col items-center gap-1'>
										<FavoriteBorderIcon
											onClick={() => toggleWishList(el)}
											className='cursor-pointer hover:text-red-500'
										/>
										<Link to={'/info/' + el.id}>
											<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
										</Link>
									</div>
								</div>

								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[140px] w-full object-contain mb-3'
									/>
									<Button
										variant='outlined'
										color='inherit'
										size='small'
										onClick={() => handleAddToCart(el.id)}
										className='!text-xs'
									>
										Add To Cart
									</Button>
								</div>

								<h3 className='text-sm font-semibold mt-2 text-center truncate'>
									{el.productName}
								</h3>
								<p className='text-red-500 font-bold text-center'>
									{el.price}$
								</p>
								<p className='text-center text-xs text-yellow-500'>
									⭐⭐⭐⭐⭐ (90)
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section> */}
			<section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2}
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => {
						const isWished = wishlist.some(item => item.id === el.id)
						return (
							<SwiperSlide key={el.id}>
								<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
									<div className='flex justify-between items-center mb-2'>
										<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
											-40%
										</span>
										<div className='text-gray-600 flex flex-col items-center gap-1'>
											{isWished ? (
												<FavoriteIcon
													sx={{ color: 'red' }}
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											) : (
												<FavoriteBorderIcon
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											)}
											<Link to={'/info/' + el.id}>
												<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
											</Link>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<img
											src={`http://37.27.29.18:8002/images/${el.image}`}
											className='h-[140px] w-full object-contain mb-3'
										/>
										<Button
											variant='outlined'
											color='inherit'
											size='small'
											onClick={() => handleAddToCart(el.id)}
											className='!text-xs'
										>
											Add To Cart
										</Button>
									</div>

									<h3 className='text-sm font-semibold mt-2 text-center truncate'>
										{el.productName}
									</h3>
									<p className='text-red-500 font-bold text-center'>
										{el.price}$
									</p>
									<p className='text-center text-xs text-yellow-500'>
										⭐⭐⭐⭐⭐ (90)
									</p>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>

			{/* <section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2} // для маленького экрана — по 1.2 карточки
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
								<div className='flex justify-between items-center mb-2'>
									<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
										-40%
									</span>
									<div className='text-gray-600 flex flex-col items-center gap-1'>
										<FavoriteBorderIcon
											onClick={() => toggleWishList(el)}
											className='cursor-pointer hover:text-red-500'
										/>
										<Link to={'/info/' + el.id}>
											<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
										</Link>
									</div>
								</div>

								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[140px] w-full object-contain mb-3'
									/>
									<Button
										variant='outlined'
										color='inherit'
										size='small'
										onClick={() => handleAddToCart(el.id)}
										className='!text-xs'
									>
										Add To Cart
									</Button>
								</div>

								<h3 className='text-sm font-semibold mt-2 text-center truncate'>
									{el.productName}
								</h3>
								<p className='text-red-500 font-bold text-center'>
									{el.price}$
								</p>
								<p className='text-center text-xs text-yellow-500'>
									⭐⭐⭐⭐⭐ (90)
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section> */}
			<section className='py-5 px-4 mt-[50px] max-w-[1400px] mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1.2}
					spaceBetween={12}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						360: { slidesPerView: 1.3, spaceBetween: 12 },
						480: { slidesPerView: 1.8, spaceBetween: 14 },
						640: { slidesPerView: 2.2, spaceBetween: 16 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 4, spaceBetween: 24 },
					}}
				>
					{prod?.map(el => {
						const isWished = wishlist.some(item => item.id === el.id)
						return (
							<SwiperSlide key={el.id}>
								<div className='p-4 border rounded-xl bg-white shadow-md w-[220px] sm:w-[250px] mx-auto hover:shadow-lg transition duration-300'>
									<div className='flex justify-between items-center mb-2'>
										<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
											-40%
										</span>
										<div className='text-gray-600 flex flex-col items-center gap-1'>
											{isWished ? (
												<FavoriteIcon
													sx={{ color: 'red' }}
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											) : (
												<FavoriteBorderIcon
													onClick={() => toggleWishList(el)}
													className='cursor-pointer hover:text-red-500'
												/>
											)}
											<Link to={'/info/' + el.id}>
												<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
											</Link>
										</div>
									</div>

									<div className='flex flex-col items-center'>
										<img
											src={`http://37.27.29.18:8002/images/${el.image}`}
											className='h-[140px] w-full object-contain mb-3'
										/>
										<Button
											variant='outlined'
											color='inherit'
											size='small'
											onClick={() => handleAddToCart(el.id)}
											className='!text-xs'
										>
											Add To Cart
										</Button>
									</div>

									<h3 className='text-sm font-semibold mt-2 text-center truncate'>
										{el.productName}
									</h3>
									<p className='text-red-500 font-bold text-center'>
										{el.price}$
									</p>
									<p className='text-center text-xs text-yellow-500'>
										⭐⭐⭐⭐⭐ (90)
									</p>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</section>

			<div className='flex justify-center mt-[100px]'>
				<Link to='/products'>
					<button className='relative overflow-hidden group bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-[18px] px-[60px] py-[12px]  shadow-lg hover:shadow-2xl transition duration-300'>
						<span className='absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition duration-300'></span>
						View All Products
					</button>
				</Link>
			</div>

			<div className='ml-[140px] mt-[40px] hidden md:block'>
				<h1 className='text-red-400 text-[20px] font-bold'>Featured</h1>
				<h1 className='text-[50px]'>New Arrival</h1>
			</div>

			<section className='flex md:justify-center flex-wrap gap-[30px] mt-[70px] px-[10px]'>
				<img src={fgg} alt='' />
				<aside>
					<img src={p2} alt='' />
					<div className='md:flex  gap-[28px] mt-[30px]'>
						<img className='m-auto' src={p3} alt='' />
						<img className='m-auto mt-[20px]' src={p4} alt='' />
					</div>
				</aside>
			</section>
			<section className='flex md:justify-around flex-wrap w-[90%] m-auto  mt-[100px]'>
				<img className='m-auto' src={oo} alt='' />
				<img className='m-auto mt-[40px]' src={oo} alt='' />
				<img className='m-auto mt-[40px]' src={oo} alt='' />
			</section>
			<Toaster position='top-right' richColors />
		</>
	)
}
