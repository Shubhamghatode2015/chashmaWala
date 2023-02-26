import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import MobileLeft from "./Components/Drawer/MobileLeft";
import LayOut from "./Components/LayOut/Index";

import routes from "./routes";
function App() { 

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
    useEffect(()=>{
      window.scroll(0, 0);
    },[])
  
  return (
    <>
      <BrowserRouter>
        <LayOut>
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/home-page" />} />
          </Routes>
          <MobileLeft />
        </LayOut>
      </BrowserRouter>
    </>
  );
}

export default App;
