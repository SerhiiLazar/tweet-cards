import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import  Navigation  from "../Navigation";
import { Wrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <Wrapper>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
