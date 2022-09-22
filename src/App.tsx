import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EntryPage from "./pages/EntryPage";
import SuggestionPage from "./pages/SuggestionPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        {/* <Route path="/:profileUsername" element={<ProfileViewPage />} /> */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/entry" element={<EntryPage />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
      </Routes>
    </div>
  );
}
