const reporteExtravioCtrl = {}
const ReporteExtravio = require("../models/reporteExtravio")

reporteExtravioCtrl.createReporte = async (req, res) => {
    const {user, perro, estado, recompensa} = req.body;
    const newReporte = new ReporteExtravio({
        user:user, perro:perro, estado:estado, recompensa:recompensa
    });
    await newReporte.save();
    res.json({message: 'ReporteExtravio Saved', ReporteExtravio: newReporte})
}

reporteExtravioCtrl.getReporte = async (req, res)=>{
    const reporte = await ReporteExtravio.findById(req.params.id);
    res.json(reporte)
}

reporteExtravioCtrl.getReportes = async (req, res)=>{
    const reporte = await ReporteExtravio.find();
    res.json(reporte)
}

reporteExtravioCtrl.updateReporte = async (req, res) =>{
    const {user, perro, estado, recompensa} = req.body;
    await ReporteExtravio.findOneAndUpdate({_id: req.params.id}, {
        user, perro, estado, recompensa
    });
    res.json({message: 'ReporteExtravio Updated'})
}

reporteExtravioCtrl.deleteReporte = async (req, res) =>{
    await ReporteExtravio.findByIdAndDelete(req.params.id);
    res.json({message: 'ReporteExtravio Deleted'})
}

module.exports = reporteExtravioCtrl;