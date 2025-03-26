import React, { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const dummyPolicy = `
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:StartInstances",
        "ec2:StopInstances",
        "rds:StartDBInstance",
        "rds:StopDBInstance"
      ],
      "Resource": "*"
    }
  ]
}
`.repeat(3);

const JAMPolicy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(dummyPolicy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative p-4 border rounded-lg shadow  ">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">JAM Policy</h3>
        <button onClick={handleCopy} className="p-1 hover:bg-gray-200 rounded">
          <ClipboardCopy size={18} />
        </button>
      </div>

      <div className="h-[424px] overflow-y-auto border p-3 bg-white text-sm rounded-lg">
        <pre className="whitespace-pre-wrap">{dummyPolicy}</pre>
      </div>
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-4 right-4 bg-white text-black px-4 py-2 rounded-lg shadow-lg"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JAMPolicy;
