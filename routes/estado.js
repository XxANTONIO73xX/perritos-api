const {Router} = require('express');
const router = Router();
const {getEstados, createEstado, getEstado, updateEstado, deleteEstado} = require('../controllers/estado.controller');
/**
 * @swagger
 * tags:
 *   name: Estado
 *   description: El gestor de los Estados
 * /api/estados:
 *   get:
 *     summary: Devuelve una lista de todos los Estados
 *     tags: [Estado]
 *     responses:
 *       200:
 *           description: Devuelve una lista de todos los Estados 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estado'
 *   post:
 *     summary: Crea un nuevo Estado
 *     tags: [Estado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estado'
 *     responses:
 *       200:
 *         description: Devuelve un mensaje indicando que se guardo correctamente
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Estado Saved'}
 *       500:
 *         description: Some server error
 * 
 * /api/estados/{id}:
 *   get:
 *     summary: Obtener Estado 
 *     tags: [Estado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: 
 *     responses:
 *       200:
 *         description: Devuelve el Estado correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estado'
 *       404:
 *         description: No se encontro el estado
 *   put:
 *    summary: Modificar los datos del Estado
 *    tags: [Estado]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del Estado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Estado'
 *    responses:
 *      200:
 *        description: Devuelve un mensaje si el Estado fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Estado Updated'}
 *      404:
 *        description: The Estado was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Estado
 *     tags: [Estado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id 
 *
 *     responses:
 *       200:
 *         description: Devuelve un mensaje si el Estado pudo ser eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Estado Deleted'}
 *       404:
 *         description: The Estado was not found
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Estado:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del Estado
 *         nombre:
 *           type: String
 *           description: El nombre del Estado del reporte.
 *       example:
 *         id: 6547272ed05e720ef5323c82
 *         nombre: perdido
 */
router.route('/')
    .get(getEstados)
    .post(createEstado)
router.route('/:id')
    .get(getEstado)
    .put(updateEstado)
    .delete(deleteEstado)


module.exports = router;