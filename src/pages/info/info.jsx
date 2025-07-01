import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '@/store/reducers/productByid/reducer'

export default function Info() {
	const { id } = useParams()
	const dispatch = useDispatch()

	const { prodId } = useSelector((store) => store.productById ?? {})

	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		if (id) {
			dispatch(getProductById(id))
		}
	}, [id])

	useEffect(() => {
		if (prodId?.images?.length > 0) {
			setSelectedImage(prodId.images[0].images)
		}
	}, [prodId])

	return (
		<div className='mt-[60px] px-[20px]'>
			<h1 className='text-gray-500 ml-[20px] text-[14px] sm:text-[16px]'>
				Account/Gaming <span className='text-black'>{prodId.brand}</span>
				
			</h1>

			<section className='flex flex-col md:flex-row justify-around flex-wrap items-start mt-[30px] gap-[30px]'>
				{/* Галерея */}
				<aside className='flex gap-4 md:w-[50%] justify-center m-auto flex-wrap'>
					{/* Превьюшки */}
					<div className='flex md:flex-col gap-3 max-h-[400px] overflow-x-auto md:overflow-y-auto w-full md:w-auto justify-center md:justify-start'>
						{prodId?.images?.map((el, index) => (
							<img
								key={index}
								src={`http://37.27.29.18:8002/images/${el.images}`}
								alt={`preview-${index}`}
								className={`w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-cover border cursor-pointer hover:scale-105 transition ${
									selectedImage === el.images ? 'border-red-500' : 'border-gray-300'
								}`}
								onClick={() => setSelectedImage(el.images)}
							/>
						))}
					</div>

					{/* Основное изображение */}
					<div className='w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] overflow-hidden'>
						<img
							src={`http://37.27.29.18:8002/images/${selectedImage}`}
							alt='main-product'
							className='w-full h-full object-contain'
						/>
					</div>
				</aside>

				{/* Инфо */}
				<aside className='md:w-[30%] w-full px-[10px] sm:px-0'>
					<h1 className='text-[30px] sm:text-[40px] font-semibold'>{prodId.brand}</h1>
					<h1 className='text-[30px] sm:text-[40px] text-gray-600'>{prodId.productName}</h1>
					<h2 className='text-[35px] sm:text-[50px] font-bold mt-4'>{prodId.price}$</h2>
					<p className='text-[16px] sm:text-[20px] text-gray-600 mt-4'>
						{prodId.description}
					</p>

					{/* Размеры */}
					{/* <div className='flex flex-wrap gap-3 mt-6'>
						<span className='text-[20px] sm:text-[24px] font-medium'>Size:</span>
						{['xs', 's', 'm', 'l', 'xl'].map((size) => (
							<button
								key={size}
								className='px-3 sm:px-4 py-1 border border-black rounded hover:bg-black hover:text-white transition text-[16px] sm:text-[18px]'
							>
								{size}
							</button>
						))}
					</div> */}
					{/* Кол-во */}
					{/* <div className='mt-6 flex gap-2'>
						<button className='border px-3 py-1 text-[18px]'>-</button>
						<button className='border px-3 py-1 text-[18px]'>2</button>
						<button className='bg-red-500 text-white border px-3 py-1 text-[18px]'>+</button>
					</div> */}
				</aside>
			</section>
		</div>
	)
}
