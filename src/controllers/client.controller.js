import Clientes from "../models/Clientes";

export const renderClientes = async (req, res) => {
    const clientes = await Clientes.find().lean();
    res.render("clientes", { clientes, nombre: "Lista de clientes" }); 
}

export const createCliente = async (req, res) => {
    try {
        const cliente = new Clientes(req.body); 
        const clienteSaved = await cliente.save();
        console.log(clienteSaved);
        res.redirect('/clientes');
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al crear el cliente."); 
    }
}

export const aboutCliente = (req, res) => {
    res.render("about");
}

export const renderClientEdit = async (req, res) => {
    const cliente = await Clientes.findById(req.params.id).lean();
    res.render("editcliente", { cliente });
}

export const editCliente = async (req, res) => {
    const { id } = req.params;

    try {
        await Clientes.findByIdAndUpdate(id, req.body);
        res.redirect('/clientes');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el cliente');
    }
};


export const deleteCliente = async (req, res) => {
    const { id } = req.params;
    await Clientes.findByIdAndDelete(id);
    res.redirect('/clientes'); 
}
