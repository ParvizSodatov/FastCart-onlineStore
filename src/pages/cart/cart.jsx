import { clearCart, deletFromCart, getCart } from '@/store/reducers/cartslice/reducer'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
export default function Cart() {
	const dispatch = useDispatch()
	const { cart } = useSelector(store => store.cart)
	useEffect(() => {
		dispatch(getCart())
	}, [])
	// console.log('cart:', cart[0]?.productsInCart)

	return (
		<>
			<div className='ml-[100px] mt-[60px] text-[30px]'>
				<h2 className='text-gray-400'>
					Home/ <span className='text-black'>Cart</span>
				</h2>
			</div>
			<section>
				{cart.productsInCart?.map(el => (
					<div className='flex items-center justify-around p-6 bg-white rounded-2xl shadow-lg w-[95%] m-auto mt-[30px]'>
						<div className='flex items-center gap-[20px]'>
							<img className='w-[100px]' src={`http://37.27.29.18:8002/images/${el.product.image}`} alt='' />
							<h1>{el.product.productName}</h1>
						</div>
						{/* <p className='md:block hidden'>{}</p> */}
						<input
							type='number'
							name=''
							id=''
							className='border-[2px] border-black w-[50px] rounded-[10px] text-[20px]'
						/>
						<p>{el.product.price}$</p>
						<p onClick={()=>dispatch(deletFromCart(el.id))}>❌</p>
					</div>
				))}
			</section>
			<section className='md:flex justify-around mt-[30px] ml-[100px] hidden'>
				<Link to='/products'>
					<Button
						sx={{ border: '1px solid black', color: 'black' }}
						variant='outlined'
					>
						Return To Shop
					</Button>
				</Link>
				<div>
					<Button
						sx={{ border: '1px solid black', color: 'black' }}
						variant='outlined'
					>
						Update Cart
					</Button>
					<Button onClick={()=>dispatch(clearCart())}
						sx={{ border: '1px solid red', color: 'red' }}
						variant='outlined'
					>
						Remove all
					</Button>
				</div>
			</section>
			<section className='md:flex justify-around mt-[50px] px-[10px]'>
				<div className='flex items-start gap-[20px] ml-[50px] md:ml-0'>
					<Button
						sx={{ border: '1px solid black', color: 'black' }}
						variant='outlined'
					>
						{' '}
						Coupon Code
					</Button>
					<Button
						sx={{ border: '1px solid red', color: 'red' }}
						variant='outlined'
					>
						Remove all
					</Button>
				</div>
				<div className='border border-black rounded-xl p-6 w-full max-w-sm sm:p-4 sm:mt-4 shadow-md sm:shadow-lg bg-white mt-[50px] md:mt-0'>
					<h2 className='text-lg font-semibold mb-4'>Cart Total</h2>

					<div className='flex justify-between mb-2'>
						<span className='text-gray-600'>Subtotal:</span>
						<span className='text-black font-medium'>$1750</span>
					</div>

					<div className='flex justify-between mb-4'>
						<span className='text-gray-600'>Shipping:</span>
						<span className='text-black font-medium'>Free</span>
					</div>

					<div className='flex justify-between text-lg font-bold mb-6'>
						<span>Total:</span>
						<span>$1750</span>
					</div>

					<Link to='/checkout'>
						{' '}
						<button className='w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-base font-medium transition duration-300'>
							Proceed to checkout
						</button>
					</Link>
				</div>
			</section>
		</>
	)
}
