import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Lancamento from '@/models/lancamentos';
import { connectDB } from '@/lib/mongodb'; // Você precisa de um utilitário de conexão com MongoDB


// GET /api/lancamentos - Lista todos os lançamentos
export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const lancamentos = await Lancamento.find().sort({ data_vencimento: -1 })

    console.log(lancamentos)
    return NextResponse.json({ lancamentos }) 
  } catch (error) {
    console.error('Erro ao buscar lançamentos:', error)
    return NextResponse.json({ error: 'Erro ao buscar lançamentos' }, { status: 500 })
  }
}

// POST /api/lancamentos - Cria um novo lançamento
export async function POST(req: NextRequest) {
  try {
    await connectDB(); // Garante que o MongoDB esteja conectado
    const body = await req.json();

    const {
      descricao,
      forma_de_pagamento,
      valor,
      tipo,
      categoria,
      data_vencimento,
      observacoes,
      recorrente,
      usuario_id
    } = body;

    if (!descricao || !valor || !tipo || !categoria || !data_vencimento || !usuario_id || !forma_de_pagamento) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    const novoLancamento = await Lancamento.create({
      descricao,
      forma_de_pagamento,
      valor,
      tipo,
      categoria,
      data_vencimento: new Date(data_vencimento),
      observacoes,
      recorrente,
      usuario_id: new mongoose.Types.ObjectId(usuario_id),
    });

    return NextResponse.json(novoLancamento, { status: 201 });
  } catch (error: any) {
    console.error('[ERRO_CRIAR_LANCAMENTO]', error);
    return NextResponse.json({ error: 'Erro ao criar lançamento' }, { status: 500 });
  }
}
