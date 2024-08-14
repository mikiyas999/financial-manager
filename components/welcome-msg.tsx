"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="mb-4 space-y-2">
      <h2 className="text-2xl font-medium text-white lg:text-4xl">
        Welcome back {isLoaded ? ", " : " "}
        {user?.firstName} 👋
      </h2>
      <p className="text-sm text-white lg:text-base">
        This is your financial overview report.
      </p>
    </div>
  );
};

export default WelcomeMessage;
