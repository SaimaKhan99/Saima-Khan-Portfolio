import React from "react";

export const PlaywrightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    {/* Left rounded half */}
    <path
      d="M 50 60 Q 50 40 70 40 L 95 40 Q 95 40 95 100 Q 95 160 70 160 Q 50 160 50 140 L 50 60 Z"
      fill="currentColor"
    />

    {/* Right rounded half */}
    <path
      d="M 105 40 Q 105 40 105 100 Q 105 160 130 160 Q 150 160 150 140 L 150 60 Q 150 40 130 40 L 105 40 Z"
      fill="currentColor"
    />

    {/* Center dividing line */}
    <line x1="100" y1="45" x2="100" y2="155" stroke="white" strokeWidth="2.5" opacity="0.4" />
  </svg>
);
