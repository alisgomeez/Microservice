import { Schema,model } from "mongoose";

const ProductSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        trim: true
    } ,
    description:{
        type: String,
        required: true
    } ,
    precio:{
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    }
},{
    timestamps:true,
    versionKey: false
});

export default model("Product", ProductSchema);
    