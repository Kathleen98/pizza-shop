import { BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import defaultTheme from "tailwindcss/defaultTheme";

const data = [
  { product: "Calabresa", amount: 80 },
  { product: "Musarela", amount: 50 },
  { product: "Portuguesa", amount: 15 },
  { product: "Moda da casa", amount: 30 },
  { product: "Frango", amount: 60 },
];

const colors = defaultTheme.colors();

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];

const PopularProdructsCharts = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium ">
            Produtos Populares
          </CardTitle>
          <BarChart className="size-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={248}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey={"amount"}
              nameKey={"product"}
              cx={"50%"}
              cy={"50%"}
              innerRadius={64}
              outerRadius={86}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAM = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAM);
                const y = cy + radius * Math.sin(-midAngle * RADIAM);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-sm "
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline={"central"}
                  >
                    {data[index].product.length > 12 ? data[index].product.substring(0, 12).concat("...") : data[index].product } (
                    {value})
                  </text>
                );
              }}
            >
              {data.map((__, index) => (
                <Cell
                  key={`cell=${index}`}
                  fill={COLORS[index]}
                  className="stroke-background hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PopularProdructsCharts;
