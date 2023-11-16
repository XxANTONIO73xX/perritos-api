const {Router} = require('express');
const router = Router();
const {createReporte, deleteReporte, getReporte, getReportes, updateReporte} = require("../controllers/reporteExtravio.controller")
/**
 * @swagger
 * tags:
 *   name: ReporteExtravio
 *   description: Se gestionan los reportes de extravio
 * /api/extravios/:
 *   get:
 *     summary: Devuelve una lista de todos los reportes
 *     tags: [ReporteExtravio]
 *     responses:
 *       200:
 *         description: Devuelve una lista de los reportes 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ReporteExtravio'
 *       500:
 *         description: Some server error
 *   post:
 *     summary: Crea un nuevo objeto ReporteExtravio
 *     tags: [ReporteExtravio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReporteExtravio'
 *     responses:
 *       200:
 *         description: Indica si se guardo correctamente
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'ReporteExtravio Saved'}
 *       500:
 *         description: Some server error
 * /api/extravios/{id}:
 *   get:
 *     summary: Obtener reportes mediante id
 *     tags: [ReporteExtravio]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del reporte 
 *     responses:
 *       200:
 *         description: Devuelve el reporte basado en el id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReporteExtravio'
 *       404:
 *         description: El reporte no fue encontrado
 *   put:
 *    summary: Modificar los datos de un reporte
 *    tags: [ReporteExtravio]
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
 *            $ref: '#/components/schemas/ReporteExtravio'
 *    responses:
 *      200:
 *        description: Devuelve un mensaje si el reporte se modifico correctamente 
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Reporte actualizado'}
 *      404:
 *        description: El reporte no se encontro
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar reporte
 *     tags: [ReporteExtravio]
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
 *         description: Devuelve un mensaje si el reporte fue eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Reporte eliminado '}
 *       404:
 *         description: No se enconmtro el reporte 
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     ReporteExtravio:
 *       type: object
 *       required:
 *         - user
 *         - perro
 *         - estado
 *         - recompensa
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del Reporte
 *         user:
 *           type: String
 *           description: El usuario
 *         perro:
 *           type: String
 *           description: El perro
 *         estado:
 *           type: String
 *           description: El estado
 *         recompensa:
 *           type: String
 *           description: La recompensa que da el dueño
 *       example:
 *         id: 6547272ed05e720ef5323c82
 *         user: 6547272ed05e720ef5323c82
 *         perro: 6547272ed05e720ef5323c82
 *         estado: 6547272ed05e720ef5323c82
 *         recompensa: $2000
 */
router.route('/')
    .get(getReportes)
    .post(createReporte)
router.route('/:id')
    .get(getReporte)
    .put(updateReporte)
    .delete(deleteReporte)

module.exports = router;