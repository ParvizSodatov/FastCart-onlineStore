import { axiosRequest, axiosStandart } from '@/utils/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('product/getProduct', async () => {
	try {
		let { data } = await axiosStandart.get('/Product/get-products')
		return data.data.products
	} catch (error) {
		console.log(error)
	}
})
export const categotryFilter = createAsyncThunk(
	'product/categotryFilter',
	async id => {
		try {
			const { data } = await axiosStandart.get(
				`/Product/get-products?CategoryId=${id}`
			)
			return data.data.products
		} catch (error) {
			console.log(error)
		}
	}
)
export const priceFilter = createAsyncThunk(
	'product/priceFilter',
	async ({ minPrice, maxPrice }, { dispatch }) => {
		try {
			let { data } = await axiosRequest(
				`/Product/get-products?MinPrice=${minPrice}&MaxPrice=${maxPrice}`
			)

			return data.data.products
		} catch (error) {
			console.log(error)
		}
	}
)

export const getbrand = createAsyncThunk('product/getbrand', async id => {
	try {
		let { data } = await axiosStandart.get('/Brand/get-brands')
		return data.data
	} catch (error) {
		console.log(error)
	}
})

export const filterBrands = createAsyncThunk(
	'product/filterBrands',
	async id => {
		try {
			let { data } = await axiosStandart(`/Product/get-products?BrandId=${id}`)
			console.log(data)
			return data.data.products
		} catch (error) {
			console.log(error)
		}
	}
)
export const ProductSlice = createSlice({
	name: 'product',
	initialState: {
		prod: [],
		brand: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getProduct.fulfilled, (state, action) => {
				// state.prod = []
				state.prod = action.payload
			})
			.addCase(categotryFilter.fulfilled, (state, action) => {
				// state.prod=[]
				state.prod = action.payload
			})
			.addCase(priceFilter.fulfilled, (state, action) => {
				state.prod = action.payload
			})
			.addCase(getbrand.fulfilled, (state, action) => {
				state.brand = action.payload
			})
			.addCase(filterBrands.fulfilled, (state, action) => {
				state.prod = action.payload
			})
	},
})
export default ProductSlice.reducer
