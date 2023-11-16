const {Schema, model} = require("mongoose");
const perroSchema = new Schema({
    raza:{
        type: String,
        require: true
    },
    color:{
        type: String,
        require: true
    },
    tamanio:{
        type: String,
        require: true
    },
    foto:{
        type: String,
        require: true 
    }
});

module.exports = model("Perro", perroSchema);