import { Document, Schema, model, models } from 'mongoose';

export interface IUser {
	fullName: string;
	email: string;
	password: string;
	dob: Date;
	gender: string;
}

const userSchema: Schema = new Schema({
	fullName: { type: String, required: [true, 'Fullname not provided.'] },
	email: {
		type: String,
		required: [true, 'Email not provided.'],
		unique: [true, 'Email already exists.'],
		validate: {
			validator: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
			message: `Not a valid email.`,
		},
	},
	password: { type: String, required: [true, 'Password not provided.'] },
	dob: { type: Date, required: [true, 'DoB not provided.'] },
	gender: { type: String, required: [true, 'Gender not provided.'] },
	created: { type: Date, default: Date.now },
});

const User = models.User<IUser> || model<IUser & Document>('User', userSchema);

export default User;
