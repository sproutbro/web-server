import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

export function generateToken(payload, expiresIn = '1d') {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null;
    }
}
