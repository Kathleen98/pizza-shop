import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Separator } from "../ui/separator";
import NavLink from "../NavLink";
import { ModeToggle } from "../theme/mode-toggle";
import AccountMenu from "../AccountMenu";

const Header = () => {
  return (
    <div className="border-b flex justify-between">
      <div className="flex h-16 items-center gap-6 px-6 w-full">
        <Pizza className="size-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={"/"}>
            <Home className="size-4" />
            Início
          </NavLink>
          <NavLink to={"/orders"}>
            <UtensilsCrossed className="size-4" />
            Pedidos
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
