import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
export const getUserProfileByid = createAsyncThunk(
	'acount/getUserProfileByid',
	async () => {
		try {
			const token = localStorage.getItem('token')
			const id = jwtDecode(token.sid)
			let { data } = await axios.get(
				`http://37.27.29.18:8002/UserProfile/get-user-profile-by-id?id=${id}`,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			)
			// console.log(data.data);
			return data.data
		} catch (error) {
			console.log(error)
		}
	}
)

export const userProfileSlice = createSlice({
	name: 'acount',
	initialState: {
		user: [],
	},
	extraReducers: builder => {
		builder.addCase(getUserProfileByid.fulfilled, (state, action) => {
			state.user = action.payload
		})
	},
})
export default userProfileSlice.reducer
