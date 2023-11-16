const {Schema, model} = require("mongoose");
const reporteExtravioSchema = new Schema({
    user: {
        type: String,
        require: true
    },
    perro: {
        type: String,
        require: true
    },
    estado: {
        type: String, 
        require: true
    },
    recompensa: {
        type: String
    }
});

module.exports = model("ReporteExtravio", reporteExtravioSchema);