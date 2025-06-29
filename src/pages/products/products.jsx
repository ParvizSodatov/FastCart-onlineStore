import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '@/utils/config'
import { addToCart } from '@/store/reducers/cartslice/reducer'
import { toast, Toaster } from 'sonner'
import { get } from '@/store/reducers/categories/reducer'
import {
	categotryFilter,
	filterBrands,
	getbrand,
	getProduct,
	priceFilter,
	searchProduct,
} from '@/store/reducers/product/reducer'
import { Link, useNavigate } from 'react-router'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function Products() {
	const [age, setAge] = useState('')
	const dispatch = useDispatch()

	const handleChange = event => {
		setAge(event.target.value)
	}

	const { prod, brand } = useSelector(store => store.product)
	const { data } = useSelector(store => store.category)

	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(10000)

	function handleAddToCart(id) {
		const token = localStorage.getItem('token')
		if (!token) {
			alert('Please register or login to add product to the cart')
			return
		}
		dispatch(addToCart(id))
	}

	const [search, setSearch] = useState('')
	function handleSearch(e) {
		setSearch(e.target.value)
		dispatch(searchProduct(e.target.value))
	}

	const navigate = useNavigate()
	const wish = JSON.parse(localStorage.getItem('wish')) || []

	function handleAddToWishList(prod) {
		const findProduct = wish.find(e => e.id == prod.id)
		if (findProduct) {
			toast.error('Продукт ужэ в Wishlist')
			
		} else {
			let product = {
				id: prod.id,
				productName: prod.productName,
				image: prod.image,
				price: prod.price,
				categoryName: prod.categoryName,
			}
			wish.push(product)
			localStorage.setItem('wish', JSON.stringify(wish))
			toast.success('Успешно добавлено в WishList')
		}
	}

	useEffect(() => {
		dispatch(get())
		dispatch(getProduct())
		dispatch(getbrand())
	}, [])

	return (
		<>
			<div className='flex justify-start items-center mt-[50px] ml-[90px]'>
				<h1 className='md:block hidden'>
					<span className='text-gray-400'>Home /</span> Explore our Products
				</h1>
			</div>

			<div className='w-[100%] flex justify-center md:hidden'>
				<TextField
					sx={{ width: '90%', margin: 'auto' }}
					id='outlined-basic'
					value={search}
					onChange={handleSearch}
					label='Search Product'
					variant='outlined'
				/>
			</div>

			<section className='flex flex-wrap mt-[80px] items-start justify-center md:justify-start'>
				<aside className='w-[300px] m-auto'>
					{/* Categories */}
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography component='span'>
								<b>Category</b>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<ul className='flex flex-col gap-[12px]'>
								{data?.map(el => (
									<li
										key={el.id}
										onClick={() => el.id && dispatch(categotryFilter(el.id))}
										className='cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#DB4444] hover:text-white hover:scale-105'
									>
										{el.categoryName}
									</li>
								))}
							</ul>
							<button
								onClick={() => dispatch(getProduct())}
								className='mt-4 px-4 py-2 bg-[#DB4444] text-white rounded hover:bg-[#c23333] transition'
							>
								See All
							</button>
						</AccordionDetails>
					</Accordion>

					{/* Brands */}
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography component='span'>
								<b>Brands</b>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<ul className='flex flex-col gap-[12px]'>
								{brand?.map(el => (
									<li
										key={el.id}
										onClick={() => el.id && dispatch(filterBrands(el.id))}
										className='cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#DB4444] hover:text-white hover:scale-105'
									>
										{el.brandName}
									</li>
								))}
							</ul>
							<button
								onClick={() => dispatch(getProduct())}
								className='mt-4 px-4 py-2 bg-[#DB4444] text-white rounded hover:bg-[#c23333] transition'
							>
								See All
							</button>
						</AccordionDetails>
					</Accordion>

					{/* Price Range */}
					<Accordion defaultExpanded>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography component='span'>
								<b>Price Range</b>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<div className='flex justify-center gap-4'>
								<div>
									<h1>MIN</h1>
									<input
										type='range'
										value={minPrice}
										onChange={e => setMinPrice(e.target.value)}
										min='0'
										max='10000'
										className='w-[100px]'
									/>
								</div>
								<div>
									<h1>MAX</h1>
									<input
										type='range'
										value={maxPrice}
										onChange={e => setMaxPrice(e.target.value)}
										min='0'
										max='10000'
										className='w-[100px]'
									/>
								</div>
							</div>
							<div className='flex gap-[10px] mt-[30px]'>
								<TextField
									label='Min'
									value={minPrice}
									onChange={e => setMinPrice(e.target.value)}
									variant='outlined'
								/>
								<TextField
									label='Max'
									value={maxPrice}
									onChange={e => setMaxPrice(e.target.value)}
									variant='outlined'
								/>
							</div>
							<Button
								color='inherit'
								sx={{ width: '250px', marginTop: '20px' }}
								variant='outlined'
								onClick={() => dispatch(priceFilter({ minPrice, maxPrice }))}
							>
								Apply
							</Button>
						</AccordionDetails>
					</Accordion>
				</aside>

				<aside className='flex flex-wrap w-full md:w-[70%] gap-6 justify-center md:justify-start mt-[40px]'>
					{prod?.length === 0 ? (
						<p className='text-xl text-gray-500 font-semibold'>
							No products found for this filter.
						</p>
					) : (
						prod.map(el => (
							<div
								key={el.id}
								className={`p-4 border rounded-lg bg-white shadow-md w-[300px] max-h-96 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
									prod.length === 1
										? 'border-red-500 shadow-lg scale-[1.05]'
										: ''
								}`}
							>
								<div className='flex justify-between items-center mb-2'>
									<span className='bg-red-500 text-white px-3 py-1 rounded-lg text-xs'>
										-40%
									</span>
									<div className='flex flex-col items-center gap-1 text-gray-600'>
										<FavoriteBorderIcon
											onClick={() => handleAddToWishList(el)}
											className='cursor-pointer hover:text-red-500'
										/>
										<Link to={'/info/' + el.id}>
											<VisibilityIcon className='cursor-pointer hover:text-blue-500' />
										</Link>
									</div>
								</div>

								<div className='flex flex-col'>
									<img
										src={`${API}/images/${el.image}`}
										alt={el.productName}
										className='h-[150px] w-full object-contain mb-2'
									/>
									<Button
										variant='outlined'
										color='inherit'
										onClick={() => handleAddToCart(el.id)}
									>
										Add To Cart
									</Button>
								</div>
								<h3 className='text-sm font-semibold mt-[10px]'>
									{el.productName}
								</h3>
								<p className='text-red-500 font-bold'>{el.price}$</p>
								<p>⭐⭐⭐⭐⭐(75)</p>
							</div>
						))
					)}
				</aside>
			</section>
			<Toaster position='top-right' richColors />
		</>
	)
}
