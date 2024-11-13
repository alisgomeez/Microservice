import User from '../models/User.js'; 

export const showSignupForm = (req, res) => {
    const message = req.query.message; // Obtén el mensaje de la URL
    res.render('signup', { message }); // Envía el mensaje a la vista
};

export const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.redirect('/signup?message=Ya existe.'); 
        }

        const newUser = new User({ email, password });
        await newUser.save();

        return res.redirect('/signin?message=Registro exitoso.');
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        return res.redirect('/signup?message=No se pudo registrar.'); 
    }
};
