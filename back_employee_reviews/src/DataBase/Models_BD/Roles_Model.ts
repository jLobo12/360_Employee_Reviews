import { Schema, model } from "mongoose";

const RolesShema = new Schema({
    Name: { type: String, require: true },
    Permission: { type: Array, default: [] },
    Create: { type: Date, default: Date.now }
}, { versionKey: false })

export default model('Roles', RolesShema, 'Roles')