import React, { useState } from "react";
import { Checkbox } from "../components/ui/checkbox";
import useAccountStore from "../hooks/useAccountStore";

const actions = [
  { category: "Start-Stop Resources", items: ["EC2", "RDS", "Light Sail", "Amazon Neptune"] },
  { category: "Pause-Resume Resources", items: ["Redshift Clusters", "Aurora Serverless V2"] },
  { category: "Resource Cleanup", items: ["Terminate EC2", "Delete EBS Volumes", "Delete EBS Snapshot", "Delete RDS Snapshot", "Delete RDS"] },
];

const ActionSelection = () => {
  const { selectedActions, toggleAction } = useAccountStore();
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="p-5 border rounded-lg shadow bg-white">
      <h3 className="font-semibold text-lg mb-4 ">Cost Saving Actions</h3>

      {actions.map((group, index) => (
        <div key={index} className="mb-4">
          {/* Category Selection (Radio Buttons) */}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value={group.category}
              checked={selectedCategory === group.category}
              onChange={() => setSelectedCategory(group.category)}
              className="w-4 h-4 cursor-pointer accent-black"
            />
            <span className="text-md font-medium">{group.category}</span>
          </div>

          {/* Action Checkboxes (Disabled unless Category is Selected) */}
          <div className="grid grid-cols-2 gap-3 mt-2 pl-6">
            {group.items.map((action, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedActions.includes(action)}
                  onCheckedChange={() => toggleAction(action)}
                  disabled={selectedCategory !== group.category}
                  className="w-5 h-5"
                />
                <label className={`text-sm ${selectedCategory !== group.category ? "text-gray-400" : ""}`}>
                  {action}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActionSelection;
