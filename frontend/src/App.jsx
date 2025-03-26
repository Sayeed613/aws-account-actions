import React from "react";
import { Routes, Route } from "react-router-dom";
import AddAccountStep2 from "./pages/AccountSetupForm";
import HomePage from "./pages/HomePage";
import NextStep from "./pages/NextStep";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-account-step-2" element={<AddAccountStep2 />} />
        <Route path="/next-step" element={<NextStep />} />
      </Routes>
  );
}

export default App;
