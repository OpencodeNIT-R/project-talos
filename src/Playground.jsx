import Home from "./pages/playground/landing-page/Home.jsx";
import { Outlet } from "react-router";

const Playground = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default Playground;
