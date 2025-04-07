import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const MonthCanceledOrdersAmount = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className=" font-semibold">Cancelamento (mês)</CardTitle>
        <DollarSign className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">
            Menos 6% em relação ao mês passado
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
