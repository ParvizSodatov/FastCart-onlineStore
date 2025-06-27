import { axiosStandart } from '@/utils/axios'
import { saveToken } from '@/utils/token'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const Login=createAsyncThunk('login/loginstore',async (user,) => {
	try {
		let data=await axiosStandart.post('http://37.27.29.18:8002/Account/login',user)
//   localStorage.setItem('token',data.data.data)
saveToken(data.data.data)
	} catch (error) {
		console.log(error);
	}
})
export const loginstore=createSlice({
	name:'login',	
	initialState:{
   error:null
	},
	reducers:{

	},
	
	
	



})
export default loginstore.reducer