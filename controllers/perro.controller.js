const perroCtrl = {}
const Perro = require("../models/perro")

perroCtrl.createPerro = async (req, res) => {
    const {raza, color, tamanio, foto} = req.body;
    const newPerro = new Perro({
        raza:raza,
        color:color,
        tamanio:tamanio,
        foto:foto
    });
    await newPerro.save();
    res.json({message: 'Perro Saved', perro: newPerro})
}

perroCtrl.getPerro = async (req, res)=>{
    const perro = await Perro.findById(req.params.id);
    res.json(perro)
}

perroCtrl.getPerros = async (req, res)=>{
    const perro = await Perro.find();
    res.json(perro)
}

perroCtrl.updatePerro = async (req, res) =>{
    const {raza, color, tamanio, foto} = req.body;
    await Perro.findOneAndUpdate({_id: req.params.id}, {
        raza, color, tamanio, foto
    });
    res.json({message: 'Perro Updated'})
}

perroCtrl.deletePerro = async (req, res) =>{
    await Perro.findByIdAndDelete(req.params.id);
    res.json({message: 'Perro Deleted'})
}

module.exports = perroCtrl;
