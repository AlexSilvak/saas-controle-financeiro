
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { DataTable } from "@/components/data-table"
import data from "@/lib/lancamentos.json"
export default function search() {
    return (
    <>
    <div className="flex grid-cols-1 px-100 py-20">
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Procure os itens aqui..." />
      <CommandList>
        <CommandEmpty>não encontrado!.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar />
            <span>Internet</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Aluguel</span>
          </CommandItem>
       
        </CommandGroup>
      </CommandList>
    </Command>
     
    </div>
    <DataTable data={data} />
    </>
    
    
    )
  }