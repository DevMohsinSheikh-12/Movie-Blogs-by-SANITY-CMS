'use client'
import React, { useState } from "react";

const Alert: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true); // Control visibility

  if (!showAlert) return null; // Don't render if hidden

  return (
    <div className="fixed right-6 bottom-20 bg-black dark:bg-slate-200 dark:text-slate-700 text-white px-6 py-3 rounded-lg shadow-md z-50">
   <ul className="list-disc pl-5">
     <li className='pb-2 no-underline'> <strong>Features</strong>.</li>
        <li>Data sourced from <strong>Sanity Headless CMS</strong>.</li>
        <li>Includes <strong>Pagination</strong> for browsing movies.</li>
        <li>individual movie details in <strong>Dynamic Routes</strong></li>
        <li>Interactive <strong>Public Comment Section</strong>.</li>
        <li>Cards with <strong>3D Movement</strong>.</li>
        <li>ModeToggle <strong>Light / Dark Theme</strong>.</li>
      </ul>
      <button
        onClick={() => setShowAlert(false)} // Dismiss on button click
        className="mt-2 text-sm bg-white text-black dark:bg-slate-700 dark:text-slate-300 px-3 py-1 rounded hover:bg-gray-200 transition"
      >
        OK
      </button>
    </div>
  );
};

export default Alert;
