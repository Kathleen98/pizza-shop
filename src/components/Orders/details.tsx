import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const OrderDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 32154d54asd5</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table className="">
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Kathleen Santos
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">11 958251039</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                email@teste.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 3 min</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left">Mussarela</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 69.90</TableCell>
              <TableCell className="text-right">R$ 139.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">Calabresa</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 69.90</TableCell>
              <TableCell className="text-right">R$ 139.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">Peperone</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 69.90</TableCell>
              <TableCell className="text-right">R$ 139.8</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">R$ 159.60</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
};

export default OrderDetails;
