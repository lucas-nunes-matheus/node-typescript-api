import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL; // Obtém a URL do Supabase do .env
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY; // Obtém a chave do Supabase do .env

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL ou Key não foram definidas. Verifique o arquivo .env.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;