import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
  return (
    <>
      <BrowserRouter>
        <LayOut>
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/home-page" />} />
          </Routes>
        </LayOut>
      </BrowserRouter>
    </>
  );
}

export default App;
