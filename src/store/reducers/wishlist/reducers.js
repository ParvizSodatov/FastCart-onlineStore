import { createSlice } from '@reduxjs/toolkit'

export const wishlistStore=createSlice({
	name:'wishlist',
	initialState:{
items:JSON.parse(localStorage.getItem('wishlist'))||[],
	},
	reducers:{
     setWishList(state,action){
		state.items=action.payload
		localStorage.setItem('wishlist',JSON.stringify(state.items))
	  },
	   addWishList(state,action){
		state.items.push(action.payload)
		localStorage.setItem('wishlist',JSON.stringify(state.items))
	  },
	   removefromWishList(state,action){
		state.items=state.items.filter((item)=>item.id!=action.payload)
		localStorage.setItem('wishlist',JSON.stringify(state.items))
	  },
	},
})
export const {setWishList,addWishList,removefromWishList}=wishlistStore.actions
export default wishlistStore.reducer