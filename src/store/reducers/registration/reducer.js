import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { useNavigate } from 'react-router'
export const Regist = createAsyncThunk(
	'regist/Regist',
	async (user) => {
		try {
			await axios.post('http://37.27.29.18:8002/Account/register', user)
			
		} catch (error) {
			console.log(error)
		}
	}
)
export const RegistrationStore = createSlice({
	name: 'regist',
	initialState: {},
})
export default RegistrationStore.reducer
