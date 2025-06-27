import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // базовые стили
import 'swiper/css/autoplay' // для автоперехода
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Autoplay, Navigation } from 'swiper/modules'
import iphone from '@/assets/iphone.png'
import SearchIcon from '@mui/icons-material/Search'
import jostik from '@/assets/jostik.png'
import keyboard from '@/assets/keyboard.png'
import chair from '@/assets/chair.png'
import computer from '@/assets/computer.png'
import kalonka from '@/assets/kalonka.png'
import 'swiper/css/navigation'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import i1 from '@/assets/i1.png'
import i2 from '@/assets/i2.png'
import i3 from '@/assets/i3.png'
import a1 from '@/assets/a1.png'
import a2 from '@/assets/a2.png'
import a3 from '@/assets/a3.png'
import a4 from '@/assets/a4.png'
import camera from '@/assets/Camera.png'
import f1 from '@/assets/f1.png'
import i5 from '@/assets/i5.png'
import i6 from '@/assets/i6.png'
import p1 from '@/assets/p1.png'
import p2 from '@/assets/p2.png'
import p3 from '@/assets/p3.png'
import p4 from '@/assets/p4.png'
import fgg from '@/assets/fgg.png'
import oo from '@/assets/oo.png'

import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { get } from '@/store/reducers/categories/reducer'
import { getProduct } from '@/store/reducers/product/reducer'
import { addToCart } from '@/store/reducers/cartslice/reducer'
import { Toaster } from 'sonner'
export default function Home() {
	const { data } = useSelector(store => store.category)
	const { prod } = useSelector(store => store.product)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(get())
		dispatch(getProduct())
	}, [])
	let navigate = useNavigate()
	const wish = JSON.parse(localStorage.getItem('wish'))
	function handleAddToWishList(prod) {
		let product = {
			id: prod.id,
			productName: prod.productName,
			image: prod.image,
			price: prod.price,
			categoryName: prod.categoryName,
		}
		wish.push(product)
		localStorage.setItem('wish', JSON.stringify(wish))
	}

	function handleAddToCart(id) {
		const token = localStorage.getItem('token')

		if (!token) {
			alert('Please registraro or login for adding product to the cart')
			navigate('/signUp')
			return
		}
		dispatch(addToCart(id))
	}
	return (
		<>
			<section className='w-[100%] md:flex items-center justify-around md:mt-[50px] px-[10px]'>
				<div className='w-[20%] md:block flex flex-col gap-[50px]'>
					{data?.map(el => (
						<div className='py-[8px]'>
							<p className='text[18px] text-gray-700 font-medium hover:text-blue-600 hover:underline cursor-pointer transition-all duration-200'>
								{el.categoryName}
							</p>
						</div>
					))}
				</div>
				<div className='border-[1px] border-solid border-black md:hidden  flex justify-between p-[10px] rounded-[10px]'>
					<input type='text' placeholder='Search' />
					<SearchIcon />
				</div>
				<div className='flex flex-wrap gap-[10px] mt-[10px] md:hidden'>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Woman’s Fashion <ArrowForwardIosIcon />
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Men’s Fashion <ArrowForwardIosIcon />
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Electronics
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Home & Lifestyle
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Medicine
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Sports & Outdoor
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Baby’s & Toys
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Groceries & Pets
					</span>
					<span className='bg-gray-300 text-[20px] px-[10px] py-[10px]'>
						Health & Beauty
					</span>
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
							<img src={iphone} alt='Фото 1' className='w-full rounded-xl' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={iphone} alt='Фото 2' className='w-full rounded-xl' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={iphone} alt='Фото 3' className='w-full rounded-xl' />
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
			<section className='md:flex items-end md:ml-[80px] hidden mt-[60px]'>
				<div className='text-[44px]'>
					<h1 className='text-red-500'>Today`s</h1>
					<h1>Flash Sales</h1>
				</div>
				<div className='flex justify-around items-center text-[44px] gap-[16px] md:ml-[50px]'>
					<div>
						<h1 className='text-[17px]'>Days</h1>
						<h1>03 :</h1>
					</div>
					<div>
						<h1 className='text-[17px]'>Hours</h1>
						<h1>03 :</h1>
					</div>
					<div>
						<h1 className='text-[17px]'>Minutes</h1>
						<h1>03 :</h1>
					</div>
					<div>
						<h1 className='text-[17px]'>Seconds</h1>
						<h1>56</h1>
					</div>
				</div>
			</section>
			<section className='py- px-[10px] mt-[50px] max-w-[1400px] m-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={2.2}
					spaceBetween={16}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: { slidesPerView: 2.5 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-lg bg-white shadow-md w-[250px] mx-auto'>
								<div className='flex justify-between items-center'>
									<span className='bg-red-400 text-white px-4 py-1 rounded-lg'>
										-40%
									</span>
									<div>
										<FavoriteBorderIcon
											onClick={() => handleAddToWishList(el)}
										/>
										<br />
										<Link to={'/info/' + el.id}>
											{' '}
											<VisibilityIcon />
										</Link>
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[150px] w-full object-contain mb-2'
									/>
									<Button
										variant='outlined'
										color='inherit'
										onClick={() => handleAddToCart(el.id)}
									>
										Add To Card
									</Button>
								</div>
								<h3 className='text-sm font-semibold mt-2'>{el.productName}</h3>
								<p className='text-red-500 font-bold'>{el.price}$</p>
								<p>⭐⭐⭐⭐⭐ (90)</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<div className='flex justify-center mt-[20px]  '>
				<Link to='/products'>
					<button className='bg-red-400 text-white px-[80px] text-[20px] py-[9px] mt-[20px]'>
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
							<div className='bg-white rounded-xl border border-gray-300 shadow-sm flex flex-col items-center justify-center py-4 h-[180px] hover:shadow-md transition'>
								<img
									src={`http://37.27.29.18:8002/images/${item.categoryImage}`}
									alt=''
									className='h-[70px] object-contain w-[100px]'
								/>
								<h1 className='text-[16px] font-semibold mt-3'>
									{item.categoryName}
								</h1>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* <div className=' w-[90%] m-auto mt-[40px]'>
					<h1 className='text-red-500 text-[40px]'>Categories</h1>
					<h1 className='text-[50px]'>Browse By Category</h1>
				</div>

				<div className='flex md:justify-around flex-wrap'>
					<div className='border-[1px] border-solid md:w-[200px] flex justify-center h-[25vh] items-center'>
						<div className='text-center'>
							<img className='h-[15vh]' src={i1} alt='' />
							<h1 className='text-[25px]'> phones</h1>
						</div>
					</div>
					<div className='border-[1px] border-solid w-[200px] flex justify-center h-[25vh] items-center'>
						<div className='text-center'>
							<img className='h-[15vh]' src={i2} alt='' />
							<h1 className='text-[25px]'> Computers</h1>
						</div>
					</div>
					<div className='border-[1px] border-solid w-[200px] flex justify-center h-[25vh] items-center'>
						<div className='text-center'>
							<img className='h-[15vh]' src={i3} alt='' />
							<h1 className='text-[25px]'> Smart</h1>
						</div>
					</div>
					<div className='border-[1px] border-solid w-[200px] flex justify-center h-[25vh] items-center bg-red-400'>
						<div className='text-center'>
							<img className='h-[15vh]' src={camera} alt='' />
							<h1 className='text-[25px]'> Camera</h1>
						</div>
					</div>
					<div className='border-[1px] border-solid w-[200px] flex justify-center h-[25vh] items-center'>
						<div className='text-center'>
							<img className='h-[15vh]' src={i5} alt='' />
							<h1 className='text-[25px]'> Head</h1>
						</div>
					</div>
					<div className='border-[1px] border-solid w-[200px] flex justify-center h-[25vh] items-center'>
						<div className='text-center'>
							<img className='h-[15vh]' src={i6} alt='' />
							<h1 className='text-[25px]'> Gaming</h1>
						</div>
					</div>
				</div> */}
			</section>

			<div className='ml-[100px] mt-[30px] md:block hidden'>
				<h1 className='text-red-500 text-[45px] '>This Month</h1>
				<h1 className='font-bold text-[30px] mt-[10]'>Best Selling Products</h1>
			</div>
			<section className='py- px-[10px] mt-[50px] max-w-[1400px] m-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={2.2}
					spaceBetween={16}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: { slidesPerView: 2.5 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-lg bg-white shadow-md w-[250px] mx-auto'>
								<div className='flex justify-between items-center'>
									<span className='bg-red-400 text-white px-4 py-1 rounded-lg'>
										-40%
									</span>
									<div>
										<FavoriteBorderIcon />
										<br />
										<VisibilityIcon />
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[150px] w-full object-contain mb-2'
									/>
									<Button variant='outlined' color='inherit'>
										Add To Card
									</Button>
								</div>
								<h3 className='text-sm font-semibold mt-2'>{el.productName}</h3>
								<p className='text-red-500 font-bold'>{el.price}</p>
								<p>⭐⭐⭐⭐⭐ (90)</p>
							</div>
						</SwiperSlide>
					))}
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
			<section className='py- px-[10px] md:mt-[50px] mt-[50px] md:max-w-[1400px] md:m-auto'>
				{/* <Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={2.2}
					spaceBetween={16}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: { slidesPerView: 2.5 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
				>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>

							<div className='flex flex-col'>
								<img
									src={a1}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>

							<h3 className='text-sm font-semibold mt-[10px]'>
								HAVIT HV-G92 Gamepad
							</h3>
							<p className='text-red-500 font-bold'>$120</p>
							<p className=''>⭐⭐⭐⭐⭐(90) </p>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a2}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a3}
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
					</SwiperSlide>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a4}
									className='h-[150px] w-full object-contain mb-2'
								/>

								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								S-Series Comfort Chair{' '}
							</h3>
							<p className='text-red-500 font-bold'>$375</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a2}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button
									variant='outlined'
									color='inherit'
									className='mt-[100px]'
								>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								HAVIT HV-G92 Gamepad
							</h3>
							<p className='text-red-500 font-bold'>$375</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a2}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								IPS LCD Gaming Monitor
							</h3>
							<p className='text-red-500 font-bold'>$375</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>
				</Swiper> */}
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={2.2}
					spaceBetween={16}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: { slidesPerView: 2.5 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-lg bg-white shadow-md w-[250px] mx-auto'>
								<div className='flex justify-between items-center'>
									<span className='bg-red-400 text-white px-4 py-1 rounded-lg'>
										-40%
									</span>
									<div>
										<FavoriteBorderIcon />
										<br />
										<VisibilityIcon />
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[150px] w-full object-contain mb-2'
									/>
									<Button variant='outlined' color='inherit'>
										Add To Card
									</Button>
								</div>
								<h3 className='text-sm font-semibold mt-2'>{el.productName}</h3>
								<p className='text-red-500 font-bold'>{el.price}</p>
								<p>⭐⭐⭐⭐⭐ (90)</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<section className='py- px-[10px] md:mt-[50px] mt-[50px] md:max-w-[1400px] md:m-auto'>
				{/* <Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={2.2}
					spaceBetween={16}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: { slidesPerView: 2.5 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
				>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>

							<div className='flex flex-col'>
								<img
									src={a1}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>

							<h3 className='text-sm font-semibold mt-[10px]'>
								HAVIT HV-G92 Gamepad
							</h3>
							<p className='text-red-500 font-bold'>$120</p>
							<p className=''>⭐⭐⭐⭐⭐(90) </p>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a2}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a3}
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
					</SwiperSlide>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a4}
									className='h-[150px] w-full object-contain mb-2'
								/>

								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								S-Series Comfort Chair{' '}
							</h3>
							<p className='text-red-500 font-bold'>$375</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a2}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button
									variant='outlined'
									color='inherit'
									className='mt-[100px]'
								>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								HAVIT HV-G92 Gamepad
							</h3>
							<p className='text-red-500 font-bold'>$375</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='p-4 border rounded-lg bg-white shadow-md'>
							<div className='flex justify-end items-center'>
								<div>
									<FavoriteBorderIcon />
									<br />
									<VisibilityIcon />
								</div>
							</div>
							<div className='flex flex-col'>
								<img
									src={a2}
									className='h-[150px] w-full object-contain mb-2'
								/>
								<Button variant='outlined' color='inherit'>
									Add To Card
								</Button>
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								IPS LCD Gaming Monitor
							</h3>
							<p className='text-red-500 font-bold'>$375</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					</SwiperSlide>
				</Swiper> */}
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={2.2}
					spaceBetween={16}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: { slidesPerView: 2.5 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
				>
					{prod?.map(el => (
						<SwiperSlide key={el.id}>
							<div className='p-4 border rounded-lg bg-white shadow-md w-[250px] mx-auto'>
								<div className='flex justify-between items-center'>
									<span className='bg-red-400 text-white px-4 py-1 rounded-lg'>
										-40%
									</span>
									<div>
										<FavoriteBorderIcon />
										<br />
										<VisibilityIcon />
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<img
										src={`http://37.27.29.18:8002/images/${el.image}`}
										className='h-[150px] w-full object-contain mb-2'
									/>
									<Button variant='outlined' color='inherit'>
										Add To Card
									</Button>
								</div>
								<h3 className='text-sm font-semibold mt-2'>{el.productName}</h3>
								<p className='text-red-500 font-bold'>{el.price}</p>
								<p>⭐⭐⭐⭐⭐ (90)</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<div className='flex justify-center mt-[20px]  '>
				<Link to='/products'>
					<button className='bg-red-400 text-white px-[80px] text-[20px] py-[9px] mt-[20px]'>
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
