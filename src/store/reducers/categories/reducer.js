import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const get = createAsyncThunk('category/get', async () => {
	try {
		let { data } = await axios.get(
			'http://37.27.29.18:8002/Category/get-categories'
		)
		return data.data
	} catch (error) {
		console.log(error)
	}
})
export const CategorySlice = createSlice({
	name: 'category',
	initialState: {
		data: [],
	},
	reducers: {},
	extraReducers:(builder)=>{
		builder.addCase(get.fulfilled,(state,action)=>{
			state.data=action.payload
			
		})
	}
})
export default CategorySlice.reducer
export const {}=CategorySlice.actions
