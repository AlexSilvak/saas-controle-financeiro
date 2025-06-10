
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
import Search from "@/components/Search"
import { DataTable } from "@/components/data-table-baixa"
import data from "@/lib/lancamentos.json"
export default function search() {
    return (
    <>
    <div className="mt-2">
  
     
    </div>
    <DataTable data={data} />
    </>
    
    
    )
  }