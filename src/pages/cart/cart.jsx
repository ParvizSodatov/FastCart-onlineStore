import { clearCart, decrease, deletFromCart, getCart, increase } from '@/store/reducers/cartslice/reducer'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete';
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
			<section className="max-w-[1200px] mx-auto px-4 mt-8">

  {cart.productsInCart?.length === 0 && (
    <p className="text-center text-gray-300 mt-10 text-xl pb-[100px]">Your cart is empty</p>
  )}


  <div className="hidden sm:flex justify-between px-6 mb-4 text-gray-500 uppercase text-sm">
    <span className="w-[40%]">Product</span>
    <span className="w-[20%] text-center">Quantity</span>
    <span className="w-[20%] text-center">Price</span>
    <span className="w-[20%] text-center">Remove</span>
  </div>

  {cart.productsInCart?.map(el => (
    <div
      key={el.id}
      className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl shadow-lg p-6 mb-4"
    >
     
      <div className="flex items-center gap-4 w-full sm:w-[40%] mb-4 sm:mb-0">
        <img
          className="w-[80px] h-[80px] object-cover rounded-lg"
          src={`http://37.27.29.18:8002/images/${el.product.image}`}
          alt={el.product.productName}
        />
        <h1 className="text-lg font-semibold">{el.product.productName}</h1>
      </div>


      <div className="flex items-center justify-center gap-2 w-full sm:w-[20%] mb-4 sm:mb-0">
        <button
          onClick={() => dispatch(decrease(el.id))}
          className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full hover:bg-rose-500 hover:text-white transition"
        >
          -
        </button>
        <h1 className="text-lg font-semibold w-8 text-center">{el.quantity}</h1>
        <button
          onClick={() => dispatch(increase(el.id))}
          className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full hover:bg-rose-500 hover:text-white transition"
        >
          +
        </button>
      </div>

      <div className="flex justify-center w-full sm:w-[20%] mb-4 sm:mb-0">
        <p className="text-xl font-semibold">{el.product.price * el.quantity}$</p>
      </div>

 
      <div className="flex justify-center w-full sm:w-[20%]">
        <Button
          onClick={() => dispatch(deletFromCart(el.id))}
          className="text-red-600 text-2xl hover:text-red-700 transition"
          aria-label="Remove item"
        >
          <DeleteIcon color='error'/>
        </Button>
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
