import { Router } from "express";
import { getUsers, getUserById } from "../controllers/userControllers";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Obtém a lista de todos os usuários cadastrados no sistema.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuários obtida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro interno no servidor
 */
router.get("/", getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     description: Obtém os detalhes de um usuário específico com base no ID fornecido.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário a ser buscado.
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.get("/:id", getUserById);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "1"
 *         nome:
 *           type: string
 *           example: "Maria Cecília Bastos Duarte"
 *         data_nascimento:
 *           type: string
 *           format: date-time
 *           example: "2003-10-16T03:00:00.000Z"
 *         responsavel_nome:
 *           type: string
 *           example: "Kelly Fernandes Sampaio"
 *         responsavel_tipo:
 *           type: string
 *           example: "Filho(a)"
 *         responsavel_email:
 *           type: string
 *           format: email
 *           example: "upsilon369@exemplo.com"
 *         responsavel_telefone:
 *           type: string
 *           example: "+55 23 90360-8843"
 *         atendimento_unidade_anterior:
 *           type: boolean
 *           example: true
 *         mais_casos_familia:
 *           type: boolean
 *           example: false
 *         observacoes_casos_familia:
 *           type: string
 *           example: "Não há histórico familiar"
 */