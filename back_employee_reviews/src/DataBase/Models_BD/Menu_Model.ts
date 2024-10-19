import { Schema, model } from "mongoose";

const MenuShema = new Schema({
    Name: { type: String, require: true },
    Path: { type: String, require: true },
    Status: { type: Boolean, default: true },
    Create: { type: Date, default: Date.now }
}, { versionKey: false })

export default model('Menu', MenuShema, 'Menu')