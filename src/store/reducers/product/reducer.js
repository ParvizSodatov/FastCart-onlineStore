import { axiosStandart } from '@/utils/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct=createAsyncThunk('product/getProduct',async () => {
	try {
		let {data}=await axiosStandart.get('/Product/get-products')
		return data.data.products
	} catch (error) {
		console.log(error);
	}
})
export const ProductSlice=createSlice({
	name:'product',
	initialState:{
		prod:[]
	},
	reducers:{

	},
	extraReducers:(builder)=>{
		builder.addCase(getProduct.fulfilled,(state,action)=>{
			state.prod=action.payload
		})
	}

})
export default ProductSlice.reducer
