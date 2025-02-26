import { Request, Response } from "express";
import supabase from "../config/supabaseClient";

export const getUsers = async (req: Request, res: Response) => {
    const results = await supabase
    .from('unidade')
    .select('*')

    res.status(200).json({ data: results })

}

export const createUser = async (req: Request, res: Response) => {
    const nome = req.body.nome;
    
    const results = await supabase
    .from('unidade')
    .insert([{nome}])

    res.status(201).json({data: results})
}