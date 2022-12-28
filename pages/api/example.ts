import type { NextApiRequest, NextApiResponse } from 'next';
import { clientPromise, client } from '../../lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const isConnected = await clientPromise;
		if (isConnected) {
			const db = client.db('facemash');
			const profile = db.collection('profile');
			console.log(profile);
			res.json(profile);
		}
	} catch (e) {
		console.error(e);
	}
};

export default handler;
