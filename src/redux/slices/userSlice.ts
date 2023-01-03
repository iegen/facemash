import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from 'models/User';

type UserState = {
	user: {
		isLoggedIn: boolean;
		data: IUser;
	};
};

const initialState = {
	user: {
		isLoggedIn: false,
		data: {},
	},
} as UserState;

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateIsLoggedIn: (state: UserState, action: PayloadAction<boolean>) => {
			state.user.isLoggedIn = action.payload;
		},
		setData: (state: UserState, action: PayloadAction<IUser>) => {
			state.user.data = action.payload;
		},
	},
});

export const { updateIsLoggedIn, setData } = userSlice.actions;
export default userSlice.reducer;
