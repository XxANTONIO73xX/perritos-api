const {Schema, model} = require("mongoose");
const reporteAvistamientoSchema = new Schema({
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
});

module.exports = model("ReporteAvistamiento", reporteAvistamientoSchema);