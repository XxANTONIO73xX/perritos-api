const estadoCtrl = {};
const Estado = require('../models/Estado')

estadoCtrl.getEstados = async (req, res) =>{
    const {nombre} = req.query;
    if (nombre) {
        estados = await Estado.find({nombre:{$regex:nombre, $options:'i'}});
    }else{
        estados = await Estado.find();
    }
    res.json(estados)
}

estadoCtrl.createEstado = async (req, res) =>{
    const {nombre} = req.body;
    const newEstado = new Estado({
        nombre: nombre
    });
    await newEstado.save();
    res.json({message: 'Estado Saved'});
}

estadoCtrl.getEstado = async (req, res) =>{
    const estado = await Estado.findById(req.params.id);
    res.json(estado)
}

estadoCtrl.updateEstado = async (req, res) =>{
    const {nombre} = req.body;
    await Estado.findOneAndUpdate({_id: req.params.id},{nombre})
    res.json({message: 'Estado Updated'})
}
estadoCtrl.deleteEstado = async (req, res) =>{
    await Estado.findByIdAndDelete(req.params.id);
    res.json({message: 'Estado Deleted'})
}

module.exports = estadoCtrl;