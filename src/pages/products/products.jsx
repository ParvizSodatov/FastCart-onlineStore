import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material'
import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import keyboard from '@/assets/keyboard.png'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '@/utils/config'
import { addToCart } from '@/store/reducers/cartslice/reducer'
import { Toaster } from 'sonner'

export default function Products() {
	const [age, setAge] = useState('')
const dispatch=useDispatch()
	const handleChange = event => {
		setAge(event.target.value)
	}

	const { prod } = useSelector(store => store.product)
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
			<div className='flex justify-around items-center mt-[50px]'>
				<h1 className='md:block hidden'>
					<span className='text-gray-400'>Home /</span>Explore our Products
				</h1>
				<Box sx={{ width: '300px' }}>
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>Age</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={age}
							label='Age'
							onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>
			<section className='flex md:justify- flex-wrap mt-[80px] items-start'>
				<aside className='m-auto'>
					<div className='w-[300px]'>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1-content'
								id='panel1-header'
							>
								<Typography component='span'>
									{' '}
									<b>Category</b>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ul className='flex flex-col gap-[30px]'>
									<li>All products</li>
									<li>Electronics</li>
									<li>Home & Lifestyle</li>
									<li className='text-[#DB4444]'>See all</li>
								</ul>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel2-content'
								id='panel2-header'
							>
								<Typography component='span'>
									<b>Brands</b>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ul className='flex flex-col gap-[30px]'>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Samsung
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Apple
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Huawei
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Pocco
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Lenovo
									</li>
									<li className='text-[#DB4444]'>See all</li>
								</ul>
							</AccordionDetails>
						</Accordion>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel3-content'
								id='panel3-header'
							>
								<Typography component='span'>
									<b>Features</b>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ul className='flex flex-col gap-[30px]'>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Metallic
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Plastic cover
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> 8GB Ram
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Super power
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> Large Memory
									</li>
									<li className='text-[#DB4444]'>See all</li>
								</ul>
							</AccordionDetails>
							<AccordionActions></AccordionActions>
						</Accordion>

						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel3-content'
								id='panel3-header'
							>
								<Typography component='span'>
									<b>Price range</b>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<input type='range' name='' id='' className='w-[260px]' />
								<div className='flex gap-[10px] mt-[30px]'>
									<TextField
										id='outlined-basic'
										label='Min'
										variant='outlined'
									/>
									<TextField
										id='outlined-basic'
										label='Max'
										variant='outlined'
									/>
								</div>
								<Button
									color='inherit'
									sx={{ width: '250px', marginTop: '20px' }}
									variant='outlined'
								>
									Outlined
								</Button>
							</AccordionDetails>
							<AccordionActions></AccordionActions>
						</Accordion>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel3-content'
								id='panel3-header'
							>
								<Typography component='span'>
									<b>Condition</b>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ul className='flex flex-col gap-[30px]'>
									<li className='flex items-center gap-[10px]'>
										<input type='radio' /> Any
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='radio' /> Refurbished
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='radio' /> Brand new
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='radio' /> Old items{' '}
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='radio' /> Large Memory
									</li>
									<li className='text-[#DB4444]'>See all</li>
								</ul>
							</AccordionDetails>
							<AccordionActions></AccordionActions>
						</Accordion>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel3-content'
								id='panel3-header'
							>
								<Typography component='span'>
									<b>Condition</b>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ul className='flex flex-col gap-[30px]'>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> ⭐⭐⭐⭐⭐
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> ⭐⭐⭐⭐⭐
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> ⭐⭐⭐⭐⭐
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> ⭐⭐⭐⭐⭐{' '}
									</li>
									<li className='flex items-center gap-[10px]'>
										<input type='checkbox' /> ⭐⭐⭐⭐⭐
									</li>
									<li className='text-[#DB4444]'>See all</li>
								</ul>
							</AccordionDetails>
							<AccordionActions></AccordionActions>
						</Accordion>
					</div>
				</aside>

				<aside className=' flex flex-wrap w-[70%] gap-6 justify-around m-auto md:m-0 mt-[40px]'>
					{prod?.map(el => (
						<div className='p-4 border rounded-lg bg-white shadow-md max-h-96 w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
							</div>
							<div className='flex flex-col'>
								<img
									src={`${API}/images/${el.image}`}
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
							<h3 className='text-sm font-semibold mt-[10px]'>
								
							</h3>
							<p className='text-red-500 font-bold'>{el.price}$</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
						
						
					))}

					{/* <div className='p-4 border rounded-lg bg-white shadow-md max-h-96 w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
								
							</div>
							<div className='flex flex-col'>
								<img
									src={keyboard}
									className='h-[150px] w-full object-contain mb-2'
								/>
								
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div> */}

					{/* <div className='p-4 border rounded-lg bg-white shadow-md max-h-96 w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
								
							</div>
							<div className='flex flex-col'>
								<img
									src={keyboard}
									className='h-[150px] w-full object-contain mb-2'
								/>
								
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
						 <div className='p-4 border rounded-lg bg-white shadow-md max-h-96 w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
								
							</div>
							<div className='flex flex-col'>
								<img
									src={keyboard}
									className='h-[150px] w-full object-contain mb-2'
								/>
								
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
						 <div className='p-4 border rounded-lg bg-white shadow-md max-h-96 w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
								
							</div>
							<div className='flex flex-col'>
								<img
									src={keyboard}
									className='h-[150px] w-full object-contain mb-2'
								/>
								
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
						 <div className='p-4 border rounded-lg bg-white shadow-md max-h-96 w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
								
							</div>
							<div className='flex flex-col'>
								<img
									src={keyboard}
									className='h-[150px] w-full object-contain mb-2'
								/>
								
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
						 <div className='p-4 border rounded-lg bg-white shadow-md max-h-96 w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
								
							</div>
							<div className='flex flex-col'>
								<img
									src={keyboard}
									className='h-[150px] w-full object-contain mb-2'
								/>
								
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div>
						 <div className='p-4 border rounded-lg bg-white shadow-md h-[45vh] w-[300px]'>
							<div className='flex justify-between items-center'>
								<span className='bg-red-400 text-white px-[15px] py-[5px] rounded-[10px]'>
									-10%
								</span>
								
							</div>
							<div className='flex flex-col'>
								<img
									src={keyboard}
									className='h-[150px] w-full object-contain mb-2'
								/>
								
							</div>
							<h3 className='text-sm font-semibold mt-[10px]'>
								AK-900 Wired Keyboard
							</h3>
							<p className='text-red-500 font-bold'>$960</p>
							<p className=''>⭐⭐⭐⭐⭐(75)</p>
						</div> */}
				</aside>
			</section>
			<Toaster position='top-right' richColors />
		</>
	)
}
