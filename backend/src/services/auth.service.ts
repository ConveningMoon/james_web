import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';

//Model for the User
interface User {
    id: number;
    email: string;
    password: string;
}

export const generateToken = (user: User): string => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })
}

