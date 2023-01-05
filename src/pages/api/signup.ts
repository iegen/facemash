import type { NextApiRequest, NextApiResponse } from 'next';
import { CallbackError, Document } from 'mongoose';

import connectMongodb from 'lib/mongodb';
import User, { IUser } from 'models/User';
import { hashPassword } from 'utils';

type UserRequestBody = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	dob: Date;
	gender: string;
};

const userSignup = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const isConnected = await connectMongodb();
		if (isConnected) {
			const { firstName, lastName, email, password, dob, gender }: UserRequestBody = JSON.parse(
				JSON.stringify(req.body)
			);

			const fullName = firstName && lastName ? firstName + ' ' + lastName : null;
			const hashedPassword = await hashPassword(password);
			await User.create(
				{ fullName, email, password: hashedPassword, dob, gender },
				(err: CallbackError, user: Document<IUser>) => {
					if (err) {
						return res.status(400).json({
							success: false,
							error: 'Could not create user.',
							message: err.code === 11000 ? 'Email already exists.' : err,
						});
					}
					return res.status(200).json({
						success: true,
						user,
					});
				}
			);
		}
	} catch (e) {
		console.error(e);
		return res.status(500).json({
			success: false,
			error: e,
		});
	}
};

export default userSignup;
