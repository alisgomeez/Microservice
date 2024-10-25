import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente.' });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar el usuario.', error });
    }
};
