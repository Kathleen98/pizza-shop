import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <h1>cabeçalho</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
