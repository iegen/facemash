import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongodb from 'lib/mongodb';
import User from 'models/User';
import { comparePassword } from 'utils';

type UserLoginRequestBody = {
	email: string;
	password: string;
};

const userLogin = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const isConnected = await connectMongodb();
		if (isConnected) {
			const { email, password }: UserLoginRequestBody = JSON.parse(JSON.stringify(req.body));
			const user = await User.findOne({ email });
			if (user) {
				const match = await comparePassword(password, user.password);
				if (match) {
					return res.status(200).json({
						success: true,
						user,
					});
				}
			}
			return res.status(401).json({
				success: false,
				error: 'Invalid credentials.',
			});
		}
	} catch (e) {
		console.error(e);
		return res.status(500).json({
			success: false,
			error: e,
		});
	}
};

export default userLogin;
