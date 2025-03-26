import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">AWS Account Actions</h1>
      <Button onClick={() => navigate("/add-account-step-2")}>Start</Button>
    </div>
  );
};

export default HomePage;
