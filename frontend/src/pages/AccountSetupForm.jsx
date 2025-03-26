import React, { useState } from "react";
import ActionSelection from "../components/ActionSelection";
import JAMPolicy from "../components/JAMPolicy";
import NavigationButtons from "../components/NavigationButton";

const AccountSetupForm = () => {
  const [selectedStep, setSelectedStep] = useState("Select Actions");

  const heading = [
    { title: "Start" },
    { title: "Select Actions" },
    { title: "Link AWS A/c" },
    { title: "Fetch" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Add Account</h2>

        {/* Step Navigation */}
        <div className="flex flex-wrap gap-4 pt-4">
          {heading.map((item, index) => (
            <div
              key={index}
              className="p-2 flex items-center space-x-2 cursor-pointer rounded-md"
              onClick={() => setSelectedStep(item.title)}
            >
              <input
                type="radio"
                name="setupStep"
                checked={selectedStep === item.title}
                onChange={() => setSelectedStep(item.title)}
                className="h-5 w-5 cursor-pointer accent-black"
              />
              <span className={`text-sm font-medium ${selectedStep === item.title ? "underline font-semibold" : ""}`}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ActionSelection />
        </div>
        <div className="md:col-span-1 border-l md:pl-4 mt-[-6.8rem]">
          <JAMPolicy />
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-2 flex justify-start">
        <NavigationButtons />
      </div>
    </div>
  );
};

export default AccountSetupForm;
