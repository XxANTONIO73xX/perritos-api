const reporteAvistamientoCtrl = {}
const ReporteAvistamiento = require("../models/reporteAvistamiento")

reporteAvistamientoCtrl.createReporte = async (req, res) => {
    const {user, perro, estado} = req.body;
    const newReporte = new ReporteAvistamiento({
        user:user, perro:perro, estado:estado
    });
    await newReporte.save();
    res.json({message: 'ReporteAvistamiento Saved', ReporteAvistamiento: newReporte})
}

reporteAvistamientoCtrl.getReporte = async (req, res)=>{
    const reporte = await ReporteAvistamiento.findById(req.params.id);
    res.json(reporte)
}

reporteAvistamientoCtrl.getReportes = async (req, res)=>{
    const reporte = await ReporteAvistamiento.find();
    res.json(reporte)
}

reporteAvistamientoCtrl.updateReporte = async (req, res) =>{
    const {user, perro, estado} = req.body;
    await ReporteAvistamiento.findOneAndUpdate({_id: req.params.id}, {
        user, perro, estado
    });
    res.json({message: 'ReporteAvistamiento Updated'})
}

reporteAvistamientoCtrl.deleteReporte = async (req, res) =>{
    await ReporteAvistamiento.findByIdAndDelete(req.params.id);
    res.json({message: 'ReporteAvistamiento Deleted'})
}

module.exports = reporteAvistamientoCtrl;