import { TextField } from '@mui/material'
import computer from '@/assets/computer.png'
export default function Checkout(){
	return <>
		<div className='ml-[60px] mt-[60px] text-[30px]'>
				<h2 className='text-gray-400'>
					Product/View Cart/ <span className='text-black'>CheckOut</span>
				</h2>
			</div>	
			<section className='flex flex-wrap items-start justify-around w-full gap-6'> 
				<form className='md:w-[40%] md:flex flex-wrap gap-[20px] bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-30 md:ml-[50px]'>
<TextField id="outlined-basic" label="First name" variant="outlined" sx={{width:"100%"}} />
<TextField id="outlined-basic" label="Last name" variant="outlined" sx={{width:"100%",marginTop:'10px'}} />
<TextField id="outlined-basic" label="Street address" variant="outlined" sx={{width:"100%",marginTop:'10px'}} />
<TextField id="outlined-basic" label="Apartment, floor, etc. (optional)" variant="outlined" sx={{width:"100%",marginTop:'10px'}} />
<TextField id="outlined-basic" label="Town/City" variant="outlined" sx={{width:"100%",marginTop:'10px'}} />
<TextField id="outlined-basic" label="Phone number" variant="outlined" sx={{width:"100%",marginTop:'10px'}} />
<TextField id="outlined-basic" label="Email address" variant="outlined" sx={{width:"100%",marginTop:'10px'}} />


				</form>


			<div className="max-w-sm w-full mx-auto p-4 bg-white rounded-xl shadow-lg space-y-6 px-[20px] ">

  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={computer} alt="Monitor" className="w-[50px] h-[50px] object-contain" />
        <span className="text-sm font-medium">LCD Monitor</span>
      </div>
      <p className="text-sm font-semibold">$650</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={computer} alt="Gamepad" className="w-[50px] h-[50px] object-contain" />
        <span className="text-sm font-medium">H1 Gamepad</span>
      </div>
      <p className="text-sm font-semibold">$1100</p>
    </div>
  </div>


  <div className="border-t pt-4 text-sm space-y-1">
    <div className="flex justify-between">
      <span>Subtotal:</span>
      <span>$1750</span>
    </div>
    <div className="flex justify-between">
      <span>Shipping:</span>
      <span>Free</span>
    </div>
    <div className="flex justify-between font-bold text-base pt-2 border-t">
      <span>Total:</span>
      <span>$1750</span>
    </div>
  </div>


  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <input type="radio" name="payment" id="bank" className="accent-black" />
      <label htmlFor="bank" className="text-sm">Bank</label>
      <div className="flex items-center gap-1 ml-4">
        {/* <img src="/visa.png" className="w-6" />
        <img src="/mastercard.png" className="w-6" />
        <img src="/bkash.png" className="w-6" />
        <img src="/nagad.png" className="w-6" /> */}
      </div>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" name="payment" id="cash" defaultChecked className="accent-black" />
      <label htmlFor="cash" className="text-sm">Cash on delivery</label>
    </div>
  </div>


  <div className="flex gap-2">
    <input 
      type="text" 
      placeholder="Coupon Code" 
      className="border rounded-md px-3 py-2 w-full text-sm focus:outline-none" 
    />
    <button className="border border-red-500 text-red-500 rounded-md px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition">
      Apply
    </button>
  </div>

  <button className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition">
    Place Order
  </button>
</div>
	
			</section>
	</>
}