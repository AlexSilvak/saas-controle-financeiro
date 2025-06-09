'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CirclePlus } from 'lucide-react'
import { toast } from "sonner"
export default function FormLancamento() {
  const [formData, setFormData] = useState({
    descricao: '',
    forma_de_pagamento:'',
    valor: '',
    tipo: '',
    categoria: '',
    data_vencimento: '',
    data_pagamento: '',
    multa: '',
    juros: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleTipoChange = (value: string) => {
    setFormData({ ...formData, tipo: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/api/lancamentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        valor: parseFloat(formData.valor),
        forma_de_pagamento: parseFloat(formData.forma_de_pagamento),
        multa: parseFloat(formData.multa) || 0,
        juros: parseFloat(formData.juros) || 0,
        usuario_id: '000000000000000000000000', // teste
      }),
    })

    if (response.ok) {
      toast('Lançamento salvo com sucesso!')
      setFormData({
        descricao: '',
        forma_de_pagamento:'',
        valor: '',
        tipo: '',
        categoria: '',
        data_vencimento: '',
        data_pagamento: '',
        multa: '',
        juros: '',
      })
    } else {
      alert('Erro ao salvar lançamento')
    }
  }
  //className=" justify-items-stretch space-y-4 max-w-xl p-4  m-auto"

  return (
    <form onSubmit={handleSubmit} className="justify-items-stretch space-y-4 max-w-xl p-4  m-auto">
      <div>
        <Label className='p-2'>Descrição</Label>
        <Input name="descricao" value={formData.descricao} onChange={handleChange} required />
      </div>
    
      <div>
        <Label className='p-2'>Forma de Pagamento</Label>
        <Select onValueChange={(value)=>setFormData({...formData,forma_de_pagamento:value})} value={formData.forma_de_pagamento}>
          <SelectTrigger><SelectValue placeholder='Forma de Pagamento'  /></SelectTrigger>
          <SelectContent>
            <SelectItem value="pix">Pix</SelectItem>
            <SelectItem value="boleto">Boleto</SelectItem>
            <SelectItem value="cartao">Cartão</SelectItem>
            <SelectItem value="tranferencia">Tranferência</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className='p-2'>Valor</Label>
        <Input name="valor" type="number" value={formData.valor} onChange={handleChange} required />
      </div>

      <div>
        <Label className='p-2'>Tipo</Label>
        <Select onValueChange={handleTipoChange} value={formData.tipo}>
          <SelectTrigger><SelectValue placeholder="Selecione o tipo" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="despesa">Despesa</SelectItem>
            <SelectItem value="receita">Receita</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div >
        <Label className='p-2'>Categoria</Label>
        <div className='flex grid-cols-2'><Input name="categoria" value={formData.categoria} onChange={handleChange} required />
      </div>
        </div>

      <div>
        <Label className='p-2'>Data de Vencimento</Label>
        <Input name="data_vencimento" type="date" value={formData.data_vencimento} onChange={handleChange} required />
      </div>

      <div>
        <Label className='p-2'>Data de Pagamento</Label>
        <Input name="data_pagamento" type="date" value={formData.data_pagamento} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className='p-2'>Multa</Label>
          <Input name="multa" type="number" value={formData.multa} onChange={handleChange} />
        </div>

        <div>
          <Label className='p-2'>Juros</Label>
          <Input name="juros" type="number" value={formData.juros} onChange={handleChange} />
        </div>
      </div>
      

      <Button type="submit" className="w-full  p-2 ">Salvar Lançamento</Button>
    </form>
  )
}
