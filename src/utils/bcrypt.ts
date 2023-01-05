import bcrypt from 'bcryptjs';

const hashPassword = async (password: string): Promise<string> => {
	const hashPassword = await bcrypt.hash(password, 10);
	return hashPassword;
};

const comparePassword = async (password: string, hashPassword: string): Promise<boolean> => {
	const match = await bcrypt.compare(password, hashPassword);
	return match;
};

export { hashPassword, comparePassword };
