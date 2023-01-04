import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'redux/slices/userSlice';
import postsReducer from 'redux/slices/postsSlice';

export function makeStore() {
	return configureStore({
		reducer: {
			user: userReducer,
			posts: postsReducer,
		},
	});
}

const store = makeStore();

export default store;
