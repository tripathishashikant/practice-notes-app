import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="rootLayout">
      <Outlet />
    </div>
  );
}

export default RootLayout;
