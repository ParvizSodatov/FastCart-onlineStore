import { addToCart } from '@/store/reducers/cartslice/reducer'
import { get } from '@/store/reducers/categories/reducer'
import { categotryFilter } from '@/store/reducers/product/reducer'
import { API } from '@/utils/config'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Toaster } from 'sonner'

export default function CategoryById() {
	const { id } = useParams()
	const { prod } = useSelector(store => store.product)
	const dispatch = useDispatch()
	function handleAddToCart(id) {
		const token = localStorage.getItem('token')
		if (!token) {
			alert('Please register or login to add product to the cart')
			return
		}
		dispatch(addToCart(id))
	}
	useEffect(() => {
		dispatch(categotryFilter(id))
	}, [dispatch, id])

	return <>
		<div className='container mx-auto px-4 py-8'>
			{prod?.length === 0 ? (
				<p className='text-xl text-gray-500 font-semibold'>
					No products found for this filter.
				</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{prod.map(el => (
						<div
							key={el.id}
							className={`p-4 border rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
						>
							<div className='flex justify-between items-center mb-2'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
							</div>
							<div className='flex flex-col items-center'>
								<img
									src={`${API}/images/${el.image}`}
									alt={el.productName}
									className='h-[150px] w-full object-contain mb-4'
								/>
								<Button
									variant='outlined'
									color='inherit'
									onClick={() => handleAddToCart(el.id)}
									sx={{
										'&:hover': {
											backgroundColor: '#f43f5e',
											color: '#fff',
											borderColor: '#f43f5e',
										},
									}}
								>
									Add To Cart
								</Button>
							</div>
							<h3 className='text-md font-semibold mt-[10px] text-center'>
								{el.productName}
							</h3>
							<p className='text-red-500 font-bold text-center'>{el.price}$</p>
							<p className='text-center'>⭐⭐⭐⭐⭐(75)</p>
						</div>
					))}
				</div>
			)}
		</div>
			<Toaster position='top-right' richColors />
	</>
	
	
}
