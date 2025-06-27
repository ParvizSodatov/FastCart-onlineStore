import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './reducers/categories/reducer'
import ProductSlice from './reducers/product/reducer'
import RegistrationStore from './reducers/registration/reducer'
import loginstore from './reducers/login/reducers'
import cartSlice from './reducers/cartslice/reducer'
import  productByidSlice  from './reducers/productByid/reducer'
// import  userProfileSlice  from './reducers/acount/reducer'
export const store = configureStore({
	reducer: {
		category: CategorySlice,
		product: ProductSlice,
		regist: RegistrationStore,
		login: loginstore,
		cart: cartSlice,
		productById: productByidSlice,
		// acount:userProfileSlice
	},
})
