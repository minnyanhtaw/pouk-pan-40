import { Outlet } from "react-router-dom";
import Header from "./Header";

const PublicLayout = () => {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-black scroll-smooth">
      <Header />
      <Outlet />
    </main>
  );
};

export default PublicLayout;
