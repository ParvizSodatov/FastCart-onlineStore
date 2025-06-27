import { Button } from '@mui/material'
import computer from '@/assets/computer.png'
import { API } from '@/utils/config'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/reducers/cartslice/reducer'
export default function Wishlist() {
	let product = JSON.parse(localStorage.getItem('wish'))
	console.log('asda', product)
	const dispatch=useDispatch()
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
			<div className='flex justify-around mt-[30px]'>
				<p className='text-[30px]'>Wishlist ({product.length})</p>
				{/* <Button color='inherit' variant='outlined'>
					Move All To Bag
				</Button> */}
			</div>
			<section className='flex md:justify-around flex-wrap  m-w-[1200px] mt-[50px]'>
				<div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					{product?.map(el => (
						<div className='flex flex-col'>
							<img
								src={`${API}/images/${el.image}`}
								className='h-[150px] w-full object-contain mb-2'
							/>
							<Button variant='outlined' color='inherit' onClick={()=>handleAddToCart(el.id)}>
								
								Add To Card
							</Button>
							<h3 className='text-sm font-semibold mt-[10px]'>
								{el.productName}
							</h3>
							<p className='text-red-500 font-bold'>{el.price}</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
					))}
				</div>
				{/* <div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					<div className='flex justify-between items-center'>
						<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
							-15%
						</span>
						
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
				</div> */}
				{/* <div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					<div className='flex justify-between items-center'>
						<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
							-15%
						</span>
						
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
				</div> */}
				{/* <div className='p-4 border rounded-lg bg-white shadow-md w-[350px] m-auto mt-[30px] md:mt-0'>
					<div className='flex justify-between items-center'>
						<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
							-15%
						</span>
					
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
				</div> */}
			</section>
			<div className='flex justify-around mt-[30px]'>
				<p className='text-[30px]'> Just For You</p>
				<Button color='inherit' variant='outlined'>
					See all
				</Button>
			</div>
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
