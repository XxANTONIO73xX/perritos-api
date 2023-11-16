const {Router} = require('express');
const router = Router();
const {createReporte, deleteReporte, getReporte, getReportes, updateReporte} = require("../controllers/reporteAvistamiento.controller")
/**
 * @swagger
 * tags:
 *   name: ReporteAvistamiento
 *   description: El gestor de los reportes de avistamiento
 * /api/avistamientos:
 *   get:
 *     summary: Devuelve una lista de todos los reportes
 *     tags: [ReporteAvistamiento]
 *     description: Filtra la busqueda 
 *     responses:
 *       200:
 *         description: Devuelve todos los reportes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ReporteAvistamiento'
 *   post:
 *     summary: Crea un nuevo reporte
 *     tags: [ReporteAvistamiento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReporteAvistamiento'
 *     responses:
 *       200:
 *         description: Devuelve un mensaje indicando que se guardo correctamente. 
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Reporte guardado '}
 *       500:
 *         description: Some server error
 * 
 * /api/avistamientos/{id}:
 *   get:
 *     summary: Obtener reporte por id
 *     tags: [ReporteAvistamiento]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del reporte
 *     responses:
 *       200:
 *         description: Devuelve un reporte correspondiente a un id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReporteAvistamiento'
 *       404:
 *         description: no se encontro el reporte
 *   put:
 *    summary: Modificar los datos del reporte
 *    tags: [ReporteAvistamiento]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del reporte
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ReporteAvistamiento'
 *    responses:
 *      200:
 *        description: Avisa si el reporte fue modificado correctamente 
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Reporte Updated'}
 *      404:
 *        description: No se encontro el reporte 
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar reporte
 *     tags: [ReporteAvistamiento]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del reporte
 *
 *     responses:
 *       200:
 *         description: Avisa si el reporte fue eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'reporte Deleted'}
 *       404:
 *         description: No se encontro el reporte 
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     ReporteAvistamiento:
 *       type: object
 *       required:
 *         - user
 *         - perro
 *         - estado
 *       properties:
 *         user:
 *           type: String
 *           description: El usuario
 *         perro:
 *           type: String
 *           description: La informacion del perro
 *         estado:
 *           type: String
 *           description: El estado en el que se encuentra el perro
 *       example:
 *         user: 6547272ed05e720ef5323c82
 *         perro: 6547272ed05e720ef5323c82
 *         estado: 6547272ed05e720ef5323c82
 */
router.route('/')
    .get(getReportes)
    .post(createReporte)
router.route('/:id')
    .get(getReporte)
    .put(updateReporte)
    .delete(deleteReporte)

module.exports = router;