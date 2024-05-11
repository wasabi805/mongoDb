import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Users from "../pages/Users";
import { PrivateRoute } from "./PrivateRoute";

// return <Navigate to="/login" state={{ from: history.location }} />

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
