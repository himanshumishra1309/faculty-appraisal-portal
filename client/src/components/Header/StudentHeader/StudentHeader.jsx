import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from 'lucide-react';
import StudentAvatar from "./StudentAvatar";

export default function StudentHeader() {
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg text-white shadow-md">
      <div className="flex items-center space-x-4">
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
            <Home className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Home Portal</span>
          </Button>
        </Link>
        <StudentAvatar/>
      </div>
    </header>
  );
}