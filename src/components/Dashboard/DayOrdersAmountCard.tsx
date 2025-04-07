import { Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const DayOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className=" font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">5</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">
            Menos 6% em relação ao mês passado
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
