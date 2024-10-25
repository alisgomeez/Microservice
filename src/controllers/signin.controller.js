import User from '../models/User.js';
import bcrypt from 'bcrypt'; 

export const showSigninForm = (req, res) => {
    res.render('signin'); 
};

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.redirect('/signup?message=Los datos no coinciden'); 
        }

        return res.redirect('/menu');

        
    } catch (error) {
        return res.redirect('/signup?message=No existe.'); 
    }
};
