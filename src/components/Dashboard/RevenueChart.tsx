import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from "recharts";
import defaultTheme from "tailwindcss/defaultTheme";

const data = [
  { day: "10/04", revinew: 1532 },
  { day: "11/04", revinew: 5468 },
  { day: "12/04", revinew: 656 },
  { day: "13/04", revinew: 1354 },
  { day: "14/04", revinew: 2548 },
  { day: "15/04", revinew: 3268 },
  { day: "16/04", revinew: 9422 },
];

const RevenueChart = () => {
  const colors = defaultTheme.colors();

  return (
    <Card className="col-span-6">
      <CardHeader className="flew items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium ">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={248}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey={"day"} tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type={"linear"}
              strokeWidth="2"
              dataKey={"revinew"}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
