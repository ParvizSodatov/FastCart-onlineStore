import { configureStore } from '@reduxjs/toolkit'
import  CategorySlice  from './reducers/categories/reducer'
import  ProductSlice  from './reducers/product/reducer'
export const store=configureStore({
reducer:{
	category:CategorySlice,
	product:ProductSlice
}

})