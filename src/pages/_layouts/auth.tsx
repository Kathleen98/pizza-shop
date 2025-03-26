import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full p-2 border-r border-foreground/5 bg-muted text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="size-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm text-center">
          Painel do parceiro &copy; Pizza Shop {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
