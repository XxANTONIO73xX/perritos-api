const {Schema, model} = require("mongoose");
const estadoSchema = new Schema({
    nombre:{
        type: String,
        require: true,
        unique: true
    }
});

module.exports = model("Estado", estadoSchema);