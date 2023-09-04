import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);

  if (!authenticated) {
    return (
      <>
        <Toaster position="top-center" />
        <main>
          <Routes>
            <Route path="/*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
