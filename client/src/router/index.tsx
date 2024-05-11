import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dash from "../pages/Dash";
import Users from "../pages/Users";
import Login from "../pages/Login";

import { PrivateRoute } from "./PrivateRoute";

// return <Navigate to="/login" state={{ from: history.location }} />

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dash />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
