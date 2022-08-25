import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { PrivateRoute } from "./hooks/PrivateRoute";
import { PublicRoute } from "./hooks/PublicRoutes";

function AppRouter() {
  return (
    <Routes>
      {privateRoutes.map((r) => (
        <Route
          path={r.path}
          element={
            <PrivateRoute>
              <r.element />
            </PrivateRoute>
          }
          key={r.path}
        />
      ))}
      {publicRoutes.map((r) => (
        <Route path={r.path} 
               element={ 
               <PublicRoute>
                <r.element />
              </PublicRoute>} 
               key={r.path} />
      ))}
    </Routes>
  );
}

export default AppRouter;
