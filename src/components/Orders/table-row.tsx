import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { Dialog, DialogTrigger } from "../ui/dialog";
import OrderDetails from "./details";

interface TableRowProps {
  key: number | undefined;
}

const OrderTableRow = ({ key }: TableRowProps) => {
  return (
    <TableRow key={key}>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} size={"sm"}>
              <Search className="size-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
         
        <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        2371319847128937
      </TableCell>
      <TableCell className="text-muted-foreground">Há 15 min</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Kathleen Santos</TableCell>
      <TableCell className="font-medium">R$ 5.000,00</TableCell>
      <TableCell>
        <Button variant={"outline"} size={"sm"}>
          <ArrowRight className="size-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant={"ghost"} size={"sm"}>
          <X className="size-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderTableRow;
