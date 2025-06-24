import baby from '@/assets/baby.png'
// import iask from '@/assets/iask.png'
import b1 from '@/assets/b1.png'
import b2 from '@/assets/b2.png'
import iask from '@/assets/lask.png'
import b3 from '@/assets/b3.png'
import { SwiperSlide } from 'swiper/react'
import Swiper from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'

export default function About() {
	return (
		<>
			<h1 className='text-[30px] ml-[100px] mt-[50px] text-gray-400'>
				Home/ <span className='text-black'>About</span>
			</h1>

			<section className='flex md:justify-around flex-wrap items-center'>
				<aside className=' md:w-[40%] px-[10px]'>
					<h1 className='text-[70px]'>Our Story</h1>
					<p className='md:text-[25px] text-[21px] mt-[40px]'>
						Launced in 2015, Exclusive is South Asia’s premier online shopping
						makterplace with an active presense in Bangladesh. Supported by wide
						range of tailored marketing, data and service solutions, Exclusive
						has 10,500 sallers and 300 brands and serves 3 millioons customers
						across the region.
					</p>
					<p className='md:text-[25px] text-[21px] mt-[40px]'>
						Exclusive has more than 1 Million products to offer, growing at a
						very fast. Exclusive offers a diverse assotment in categories
						ranging from consumer.
					</p>
				</aside>
				<img className='px-[10px] mt-[20px]' src={baby} alt="" />
			</section>
			<section className='flex md:justify-around flex-wrap  mt-[70px]'>
				<img src={iask} alt=""  className='m-auto'/>
				<img src={iask} alt=""  className='m-auto mt-[20px]' />
				<img src={iask} alt="" className='m-auto mt-[20px]'/>
				<img src={iask} alt="" className='m-auto mt-[20px]'/>
			</section>
				<section className='flex md:justify-around flex-wrap  mt-[70px] px-[30px]'>
				<img src={b1} alt=""  className='m-auto'/>
				<img src={b2} alt=""  className='m-auto mt-[20px]' />
				<img src={b3} alt="" className='m-auto mt-[20px]'/>
			</section>
			<section className='flex md:justify-around flex-wrap  mt-[70px]'>
				<img src={iask} alt=""  className='m-auto'/>
				<img src={iask} alt=""  className='m-auto mt-[20px]' />
				<img src={iask} alt="" className='m-auto mt-[20px]'/>
				<img src={iask} alt="" className='m-auto mt-[20px]'/>
			</section>
		
		</>
	)
}
