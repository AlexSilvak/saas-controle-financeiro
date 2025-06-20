'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import axios from "axios"
import { Printer } from 'lucide-react';


type Lancamento = {
  _id: string;
  descricao: string;
  forma_pagamento: string;
  valor: number;
  tipo: string;
  categoria: string;
  data_pagamento:string
  status: "pending" | "processing" | "success" | "failed"
};



export default function search() {
  const [lancamentos, setLancamentos] = useState<Lancamento[]>([]);
  const [url, setURL] = useState("/api/lancamentos");

   
  

   


   useEffect(()=>{

   const fetchData=async()=>{
  
   try {
    const response = await axios.get(url);
    setLancamentos(response.data.lancamentos); // Depende da estrutura retornada pela API
    return console.log(lancamentos)
  } catch (error) {
    console.error('Erro ao consultar os dados na API:', error);
  }
  console.log(lancamentos)
   }

   fetchData()
   },[])

   console.log(lancamentos)
    return (
   
    < >
    
   <Table>
      
      <TableCaption>Lançamentos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Descrição</TableHead>
          <TableHead>Forma de Pagamento</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead >Tipo</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead >Data Vencimento</TableHead>
          <TableHead >Data Pagamento</TableHead>
          <TableHead >Status</TableHead>
          <TableHead >Multa</TableHead>
          <TableHead >Juros</TableHead>
          <TableHead >Total Pagar</TableHead>
          <TableHead >Oberservações</TableHead>
          <TableHead >Recorrente</TableHead>
          <TableHead >Titular</TableHead>
          <TableHead >Data Criação</TableHead>
          <TableHead >UID</TableHead>
          
        </TableRow>
      </TableHeader>
      {  lancamentos.map((item:any)=>{
        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString("pt-BR"); // "18/06/2025"
        item.data_pagamento = dataFormatada;
        item.data_vencimento=dataFormatada;
        item.data_criacao=dataFormatada;
        let  valor_total_pagar=item.valor+item.juros+item.multa
          return (
            <TableBody key={item._id}>
            <TableRow >      
              <TableCell>{item.descricao}</TableCell>
              <TableCell>{item.forma_de_pagamento}</TableCell>
              <TableCell >R${item.valor}</TableCell>
              <TableCell>{item.tipo}</TableCell>
              <TableCell>{item.categoria}</TableCell>
              <TableCell>{item.data_vencimento}</TableCell>
              <TableCell>{item.data_pagamento}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>R${item.multa}</TableCell>
              <TableCell>R${item.juros}</TableCell>
              <TableCell>R${valor_total_pagar}</TableCell>
              <TableCell>{item.observacaoes}</TableCell>
              <TableCell>{item.recorrente}</TableCell>
              <TableCell>{item.usuario_id}</TableCell>
              <TableCell>{item.data_criacao}</TableCell>
              <TableCell>{item._id}</TableCell>
              
            </TableRow>
          </TableBody>
          )
    
        })
       }
      
    </Table>
    
    </>

   
    
    )
  }