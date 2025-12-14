import { Navigate, Outlet } from "react-router-dom";
import TopBarComponent from "./Dashboard/TopBar/TopBarComponent";
import Sidebar1 from "./Dashboard/Sidebar1";
import { useEffect, useState } from "react";

const PrivateRoute = () => {
  const token = sessionStorage.getItem("token");

  const [colla, setColla] = useState(false);

  // 🔥 Auto-collapse on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setColla(true);
      } else {
        setColla(false);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const click = () => {
    setColla(prev => !prev);
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <TopBarComponent click={click} />

      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar1 colla={colla} />

        {/* Main content */}
        <div style={{ flex: 1, overflowX: "hidden" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PrivateRoute;
