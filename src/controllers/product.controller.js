import Product from "../models/Productos";

export const renderProductosEdit = async(req,res)=>{
    const products = await Product.find().lean();
    //console.log(tasks[0]);
    res.render("productos",{products, nombre: "Lista de productos"});
}

export const createProduct =async(req,res)=>{
    try {
        const product = new Product(req.body)
        const productSaved = await product.save();
        
        console.log(productSaved);
        //console.log(req.body);
        //res.send("Guardar");
        res.redirect('/productos');
    } catch (error) {
        console.log(error);
    }
}

export const aboutProduct = (req,res)=>{
    res.render("about");
}

export const renderProductEdit = async(req,res)=>{
    //console.log(req.params.id)
  const product = await Product.findById(req.params.id).lean()

   // res.render("edit");
    res.render("edit",{ product });
}

export const editProduct = async (req, res) => {
    const { id } = req.params;

    
        await Product.findByIdAndUpdate(id, {
            nombre: req.body.nombre,
            description: req.body.description,
            precio: req.body.precio,
            stock: req.body.stock
        });

        res.redirect('/productos');
};

export const deleteProduct = async(req,res)=>{
    const { id } = req.params;
    await Product.findByIdAndDelete(id)
    //res.render("delete");
    res.redirect('/productos');
}

