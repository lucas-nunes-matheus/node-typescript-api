import { Request, Response } from "express";
import pool from "../config/renderClient";

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Consulta para buscar todos os usuários na tabela "alunos"
    const result = await pool.query("SELECT * FROM aluno");
    res.status(200).json({ data: result.rows });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM aluno WHERE id = $1', [id]);
    res.status(200).json({ data: result.rows });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


