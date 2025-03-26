import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const NavigationButtons = () => {
    const navigate = useNavigate();

    return (
      <div className="flex gap-4 mt-6">
        <Button variant="outline" onClick={() => navigate("/")}>Back</Button>
        <Button onClick={() => navigate("/next-step")}>Next</Button>
      </div>
    );
  };

export default NavigationButtons;
