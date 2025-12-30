import React from "react";
import { Link } from "react-router-dom";
import FacultyAvatar from "./FacultyAvatar";

export default function FacultyHeader() {
  return (
    <>
      <header className="flex justify-between items-center py-1 m-0 bg-blue-600 shadow-md">
        <div className="flex items-center">
        </div>

        <div className="flex justify-between">
          <img
            src="assets\icons\emblem.svg"
            alt="College Logo"
            className="h-20 w-20
    ml-2 items-center "
          />
          <FacultyAvatar />
        </div>
      </header>
    </>
  )
}
