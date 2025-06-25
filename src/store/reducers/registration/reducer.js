import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { useNavigate } from 'react-router'
export const Regist = createAsyncThunk(
	'regist/Regist',
	async (user,) => {
		try {
			let res=await axios.post('http://37.27.29.18:8002/Account/register', user)
			console.log(res);
			return res.data
		} catch (error) {
			console.log(error)
		}
	}
)
export const RegistrationStore = createSlice({
	name: 'regist',
	initialState: {
		error:null
	},
	extraReducers:(builder)=>{
			builder.addCase(Regist.rejected,(state,action)=>{
				state.error=action.payload
			})
		}
})
export default RegistrationStore.reducer
