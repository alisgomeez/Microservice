import Proveedores from "../models/Proveedores.js"; 

export const renderProveedores = async (req, res) => {
    const proveedores = await Proveedores.find().lean();
    res.render("proveedores", { proveedores, nombre: "Lista de Proveedores" }); 
}

export const createProveedor = async (req, res) => {
    try {
        const proveedor = new Proveedores(req.body); 
        const proveedorSaved = await proveedor.save();
        console.log(proveedorSaved);
        res.redirect('/proveedores');
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al crear el proveedor."); 
    }
}

export const aboutProveedor = (req, res) => {
    res.render("about");
}

export const renderProveedorEdit = async (req, res) => {
    const proveedor = await Proveedores.findById(req.params.id).lean();
    res.render("editprov", { proveedor }); // Asegúrate de que el nombre de la vista sea correcto
}

export const editProveedor = async (req, res) => {
    const { id } = req.params;

    try {
        await Proveedores.findByIdAndUpdate(id, req.body);
        res.redirect('/proveedores');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el proveedor'); // Cambiado a 'proveedor'
    }
};

export const deleteProveedor = async (req, res) => {
    const { id } = req.params;

    try {
        await Proveedores.findByIdAndDelete(id);
        res.redirect('/proveedores'); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el proveedor'); // Mensaje de error más claro
    }
}
