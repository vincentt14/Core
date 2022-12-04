import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisPage";

const App = () => {
  return (
    <main>
      <Routes>
          <Route path="/" element={ <LoginPage />} />
          <Route path='/register' element={ <RegisPage />} />
      </Routes>
    </main>
  );
};

export default App;
