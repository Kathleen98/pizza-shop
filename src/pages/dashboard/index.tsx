import { DayOrdersAmountCard } from "@/components/Dashboard/DayOrdersAmountCard";
import { MonthCanceledOrdersAmount } from "@/components/Dashboard/MonthCanceledOrdersAmount";
import { MonthOrdersAmount } from "@/components/Dashboard/MonthOrdersAmount";
import { MonthRevenueCard } from "@/components/Dashboard/MonthRevenueCard";
import PopularProdructsCharts from "@/components/Dashboard/PopularProductsCharts ";


import RevenueChart from "@/components/Dashboard/RevenueChart";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3x1 font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmount />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />

          <PopularProdructsCharts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
