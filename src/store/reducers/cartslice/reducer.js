import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'sonner'

export const getCart = createAsyncThunk('cart/getCart', async () => {
	const token = localStorage.getItem('token')
	const { data } = await axios.get(
		'http://37.27.29.18:8002/Cart/get-products-from-cart',
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	)
	return data.data[0]
})
export const addToCart = createAsyncThunk(
	'cart/addToCart',
	async (id, { dispatch }) => {
		const token = localStorage.getItem('token')
		try {
			await axios.post(
				`http://37.27.29.18:8002/Cart/add-product-to-cart?id=${id}`,
				{},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			)
			dispatch(getCart())
			toast.success('Успешно добавлено')
		} catch (error) {
			console.log(error)
			toast.info('Уже в   карзине!')
		}
	}
)

export const deletFromCart = createAsyncThunk(
	'cart/deletFromCart',
	async (id, { dispatch }) => {
		try {
			const token = localStorage.getItem('token')
			await axios.delete(
				`http://37.27.29.18:8002/Cart/delete-product-from-cart?id=${id}`,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			)
			dispatch(getCart())
		} catch (error) {
			console.log(error)
		}
	}
)

export const clearCart = createAsyncThunk(
	'cart/clearCart',
	async (_, { dispatch }) => {
		try {
			const token = localStorage.getItem('token')
			console.log(token)

			await axios.delete('http://37.27.29.18:8002/Cart/clear-cart', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			dispatch(getCart())
		} catch (error) {
			console.log(error)
		}
	}
)

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getCart.fulfilled, (state, action) => {
			state.cart = action.payload
		})
	},
})
export default cartSlice.reducer
