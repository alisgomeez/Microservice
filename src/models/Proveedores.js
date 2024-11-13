import { Schema,model } from "mongoose";

const ProveedorSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        trim: true
    } ,
    description:{
        type: String,
        required: true
    } 
},{
    timestamps:true,
    versionKey: false
});


export default model("Proveedor", ProveedorSchema);
    