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

	return (
		<>
			<div className='ml-5 md:ml-[100px] mt-[60px] text-[28px] md:text-[30px]'>
				<h2 className='text-gray-400'>
					Home/ <span className='text-black'>Cart</span>
				</h2>
			</div>

			<section className='max-w-[1200px] mx-auto px-4 mt-8'>
				{/* Товары */}
				{cart.productsInCart?.length === 0 && (
					<p className="text-center text-gray-500 mt-10 text-xl">Your cart is empty</p>
				)}
				{cart.productsInCart?.map(el => (
					<div
						key={el.id}
						className='flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl shadow-lg p-6 mb-6 gap-4 sm:gap-0'
					>
						<div className='flex items-center gap-6 sm:gap-10 w-full sm:w-[45%]'>
							<img
								className='w-[100px] h-[100px] object-cover rounded-lg'
								src={`http://37.27.29.18:8002/images/${el.product.image}`}
								alt={el.product.productName}
							/>
							<h1 className='text-lg font-semibold'>{el.product.productName}</h1>
						</div>

						<div className='flex items-center justify-between w-full sm:w-[45%] gap-6 sm:gap-10'>
							<input
								type='number'
								min={1}
								value={el.quantity || 1}
								readOnly
								className='border-2 border-black rounded-lg w-[60px] text-center text-lg'
							/>
							<p className='text-xl font-semibold'>{el.product.price}$</p>
							<button
								onClick={() => dispatch(deletFromCart(el.id))}
								className='text-red-600 text-2xl hover:text-red-700 transition'
								aria-label='Remove item'
							>
								❌
							</button>
						</div>
					</div>
				))}
			</section>

			{/* Кнопки под товарами */}
			<section className='max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 mt-8'>
				<Link to='/products' className='w-full md:w-auto'>
					<Button
						sx={{ border: '1px solid black', color: 'black' }}
						variant='outlined'
						fullWidth
					>
						Return To Shop
					</Button>
				</Link>

				<div className='flex gap-4 w-full md:w-auto'>
					<Button
						sx={{ border: '1px solid black', color: 'black' }}
						variant='outlined'
						fullWidth
					>
						Update Cart
					</Button>
					<Button
						onClick={() => dispatch(clearCart())}
						sx={{ border: '1px solid red', color: 'red' }}
						variant='outlined'
						fullWidth
					>
						Remove All
					</Button>
				</div>
			</section>

			{/* Итоговая часть */}
			<section className='max-w-[1200px] mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0'>
				<div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
					<Button
						sx={{ border: '1px solid black', color: 'black' }}
						variant='outlined'
						fullWidth={false}
					>
						Coupon Code
					</Button>
					<Button
						onClick={() => dispatch(clearCart())}
						sx={{ border: '1px solid red', color: 'red' }}
						variant='outlined'
						fullWidth={false}
					>
						Remove All
					</Button>
				</div>

				<div className='border border-black rounded-xl p-6 w-full max-w-sm shadow-md bg-white'>
					<h2 className='text-lg font-semibold mb-4'>Cart Total</h2>

					<div className='flex justify-between mb-2'>
						<span className='text-gray-600'>Subtotal:</span>
						<span className='text-black font-medium'>
							${cart.totalPrice || 0}
						</span>
					</div>

					<div className='flex justify-between mb-4'>
						<span className='text-gray-600'>Shipping:</span>
						<span className='text-black font-medium'>Free</span>
					</div>

					<div className='flex justify-between text-lg font-bold mb-6'>
						<span>Total:</span>
						<span>${cart.totalPrice || 0}</span>
					</div>

					<Link to='/checkout'>
						<button className='w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-base font-medium transition duration-300'>
							Proceed to checkout
						</button>
					</Link>
				</div>
			</section>
		</>
	)
}
