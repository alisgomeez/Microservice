import { Schema,model } from "mongoose";

const ClienteSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        trim: true
    } ,
    paterno:{
        type: String,
        required: true
    } ,
    materno:{
        type: String,
        required: true
    } 
},{
    timestamps:true,
    versionKey: false
});


export default model("Cliente", ClienteSchema);
    