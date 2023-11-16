const {Router} = require('express');
const router = Router();
const {createUser, login, updateUser} = require('../controllers/user.controller')
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: El gestor de los Usuarios
 * /api/users:
 *   post:
 *     summary: Registra un usuario en el sistema.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'User registered'}
 *       500:
 *         description: Some server error
 * 
 * /api/users/{id}:
 *   put:
 *    summary: Modificar los usuarios
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del Usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: Esta URL devuelve un mensaje si el Usuario fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'User Updated'}
 *      404:
 *        description: The User was not found
 *      500:
 *        description: Some error happened
 * /api/users/login:
 *   post:
 *     summary: Crea un nuevo Usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example: {"email": "maria.rodriguez@example.com", "password" : "R0driguez!2023"}
 *     responses:
 *       200:
 *         description: Devuelve un mensaje indicando si las credenciales son correctas.
 *         content:
 *           application/json:
 *             schema:
 *               example: {"message":"The username and password combination is correct!","goIn":1,"usuario":{"_id":"65494c0447023f105d846fd0","nombre":"María Rodríguez","dicMac":"CD:EF:AB:56:34:12","email":"maria.rodriguez@example.com","password":"$2a$10$MI32d9vYoXb486qJBNKgVu1A7tBKSpKJT7xDSVAf.yQ80wmV.4N6C","createdAt":"2023-11-06T20:26:44.892Z","updatedAt":"2023-11-06T20:26:44.892Z","__v":0}}
 *       400:   
 *         description: Indica si las credenciasles son incorrectas o sino existe el Usuario.
 *         content:
 *           application/json:
 *             schema:
 *               example: [{message: "The email does not exist", goIn: 0}, { message: "The password is invalid", goIn: 0 }] 
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nombre
 *         - dicMac
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del Usuario
 *         nombre:
 *           type: String
 *           description: El nombre del Usuario (nombre + apellido).
 *         dicMac:
 *           type: String
 *           description: La dirección Mac del usuario.
 *         email:
 *           type: String
 *           description: el correo para acceder al sistema.
 *         password:
 *           type: String
 *           description: La contraseña de acceso al sistema.
 *       example:
 *         id: d5fEasz
 *         nombre: Jonathan Jesus Castillo Cruz
 *         dicMac: 'EF:AB:CD:34:56:12'
 *         email: Jonathan@gmail.com
 *         password: $2a$10$k5iTIlRMuWlbbo3uoF7pIeHZxmncQjuu6k9e7F6jmsTqzzRb3zU7K
 */
router.route('/')
    .post(createUser)
router.route('/:id')
    .put(updateUser)
router.route('/login')
    .post(login)
module.exports = router;