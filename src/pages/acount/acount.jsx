import { TextField } from '@mui/material'

export default function Acount(){
	return <>
	<h1  className='text-[30px] ml-[100px] mt-[40px]'><span className='text-gray-400'>Home /</span>Acount</h1>
	

<div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10"> <h2 className="text-xl font-semibold text-red-500 mb-4">Profile</h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"> <input
type="text"
placeholder="First name"
className="border p-2 rounded w-full"
defaultValue="Parviz"

/> <input
type="text"
placeholder="Last name"
className="border p-2 rounded w-full"
defaultValue="Sodatov"

/> <input
type="email"
placeholder="Email address"
className="border p-2 rounded w-full"
defaultValue="sodatov0705@gmail.com"
/> <input
type="text"
placeholder="Street address"
className="border p-2 rounded w-full"
defaultValue="Navbahor 2/1 h-19"
/> </div>

<h2 className="text-xl font-semibold text-gray-700 mb-4">Password Changes</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <input
      type="password"
      placeholder="Current password"
      className="border p-2 rounded w-full md:col-span-2"
    />
    <input
      type="password"
      placeholder="New password"
      className="border p-2 rounded w-full"
    />
    <input
      type="password"
      placeholder="Confirm new password"
      className="border p-2 rounded w-full"
    />
  </div>

  <div className="flex justify-end gap-4">
    <button className="text-gray-600">Cancel</button>
    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">	Save Changes</button>
	  </div>
	   </div>
	</>
}