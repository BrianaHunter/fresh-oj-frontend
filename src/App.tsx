import { Routes, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <HomePage />
            // </PrivateRoute>
          }
        />

        {/* <Route path="/:profileUsername" element={<ProfileViewPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
}
