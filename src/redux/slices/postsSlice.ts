import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Liker = {
	userID: string;
	fullName: string;
	profilePic: string;
};

type Commenter = {
	userID: string;
	fullName: string;
	profilePic: string;
	dateCreated: Date;
	likes: Liker[];
	comment: string;
};

type Post = {
	userID: string;
	fullName: string;
	date: Date;
	caption: string;
	picture: string | undefined;
	likes: Liker[];
	comments: Commenter[];
};

type PostState = {
	posts: Post[];
};

const initialState = {
	posts: [],
} as PostState;

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state: PostState, action: PayloadAction<Post[]>) => {
			state.posts = action.payload;
		},
	},
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
