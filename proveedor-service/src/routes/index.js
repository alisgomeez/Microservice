import { Router } from "express";
import Product from "../models/Productos";

import {
    renderProductosEdit,createProduct,aboutProduct,renderProductEdit,editProduct,deleteProduct,} 
from "../controllers/product.controller";

import {
    renderClientes,createCliente,editCliente,deleteCliente,renderClientEdit,} 
from "../controllers/client.controller";

import {
    renderProveedores,createProveedor,renderProveedorEdit,editProveedor,deleteProveedor,aboutProveedor
} from '../controllers/proveedor.controller.js';

import { renderMenu } from "../controllers/menu.controller";
import { renderIndex } from "../controllers/index.controller";

const router = Router();


// Rutas para productos
router.get("/productos", renderProductosEdit);
router.post("/productos/add", createProduct);
router.get("/productos/about", aboutProduct);
router.get("/productos/edit/:id", renderProductEdit);
router.post("/productos/edit/:id", editProduct);
router.get("/productos/delete/:id", deleteProduct);

// Rutas para clientes
router.get("/clientes", renderClientes);
router.post("/clientes/add", createCliente);
router.get("/clientes/edit/:id", renderClientEdit);
router.post("/clientes/edit/:id", editCliente);
router.get("/clientes/delete/:id", deleteCliente);

// Rutas para proveedores
router.get('/proveedores', renderProveedores);
router.post('/proveedores/add', createProveedor);
router.get('/proveedores/edit/:id', renderProveedorEdit);
router.post('/proveedores/edit/:id', editProveedor);
router.get('/proveedores/delete/:id', deleteProveedor);
router.get('/about', aboutProveedor);

router.get("/", renderIndex);
router.get('/menu', (req, res) => {
    res.render('menu'); 
});

export default router;
