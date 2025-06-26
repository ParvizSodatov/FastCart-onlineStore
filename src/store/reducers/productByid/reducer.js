import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductById = createAsyncThunk(
	'productById/getProductById',
	async (id) => {
		try {
			let { data } = await axios.get(
				`http://37.27.29.18:8002/Product/get-product-by-id?id=${id}`
			)
			console.log('data',data)
      return data.data	
			
		} catch (error) {
			console.log(error)
		}
	}
)
export const productByidSlice = createSlice({
	name: 'productById',
	initialState: {
		prodId:{}
	},
	reducers: {},
	extraReducers:(builder)=>{
		builder.addCase(getProductById.fulfilled,(state,action)=>{
			state.prodId=action.payload
		})
	}
})
export default productByidSlice.reducer


