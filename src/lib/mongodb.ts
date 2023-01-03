import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri: string = process.env.MONGODB_URI;

// the `strictQuery` option will be switched back to `false` by default in Mongoose 7
mongoose.set('strictQuery', false);

const connectMongodb = async () =>
	mongoose
		.connect(uri)
		.then(() => {
			console.log('Connected to MongoDB');
			return true;
		})
		.catch((e) => {
			console.error(e);
			return false;
		});

export default connectMongodb;
