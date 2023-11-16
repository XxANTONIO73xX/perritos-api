const {Router} = require('express');
const router = Router();
const {createPerro, getPerro, getPerros, deletePerro, updatePerro} = require("../controllers/perro.controller")
/**
 * @swagger
 * tags:
 *   name: Perro
 *   description: Gestiona caracteristicas de los animales
 * /api/perros:
 *   get:
 *     summary: Devuelve una lista de todos los perros
 *     tags: [Perro]
 *     responses:
 *       200:
 *         description: Lista de todos los perros 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perro'
 *   post:
 *     summary: Crea un nuevo objeto perro
 *     tags: [Perro]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Perro'
 *     responses:
 *       200:
 *         description: Indica si se guardo correctamente
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'perro Saved'}
 *       500:
 *         description: Some server error
 * 
 * /api/perros/{id}:
 *   get:
 *     summary: Obtener un perro por su id
 *     tags: [Perro]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del perro
 *     responses:
 *       200:
 *         description: Devuelve un perro correspondiendo a un id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perro'
 *       404:
 *         description: El perro no fue encontrado
 *   put:
 *    summary: Modificar los datos de un perro
 *    tags: [Perro]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del Perro
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Perro'
 *    responses:
 *      200:
 *        description: Avisa si perro se modifico correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Perro Updated'}
 *      404:
 *        description: No se encontro el perro
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Perro
 *     tags: [Perro]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del Perro
 *
 *     responses:
 *       200:
 *         description: Avisa si se logro eliminar perro
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Perro Deleted'}
 *       404:
 *         description: No se encontro el perro
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Perro:
 *       type: object
 *       required:
 *         - raza
 *         - color
 *         - tamanio
 *         - foto
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del Perro
 *         raza:
 *           type: String
 *           description: La raza del perro
 *         color:
 *           type: String
 *           description: el color del perro.
 *         tamanio:
 *           type: String
 *           description: el tamaño del perro.
 *         foto:
 *           type: String
 *           description: una foto en formato URL del perro.
 *       example:
 *         id: 6547272ed05e720ef5323c82
 *         raza: pibull
 *         color: cafe  
 *         tamanio: grande
 *         foto: url
 */
router.route('/')
    .get(getPerros)
    .post(createPerro)
router.route('/:id')
    .get(getPerro)
    .put(updatePerro)
    .delete(deletePerro)

module.exports = router;