import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";
import DashboardContent from "./components/DashboardContent";
import Categories from "./components/Categories";
import CategoryEdit from "./components/CategoryEdit";

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    setAuthenticated(true);
  }, []);

  if (!authenticated) {
    return (
      <>
        <Toaster position="top-center" />
        <main>
          <Routes>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} >
            <Route path="/" element={<DashboardContent />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categoryEditor" element={<CategoryEdit />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
