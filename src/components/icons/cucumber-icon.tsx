import React from "react";

export const CucumberIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 300 340"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="5.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Main cucumber cross-section circle */}
    <circle cx="150" cy="140" r="110" />

    {/* Speech bubble tail - bottom left */}
    <path d="M 85 230 L 50 290 L 100 245" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* 8 Cucumber seeds arranged in circular pattern inside */}
    {/* Top seed */}
    <ellipse cx="150" cy="50" rx="11" ry="20" fill="none" stroke="currentColor" strokeWidth="5.5" />
    
    {/* Top-right seed (45°) */}
    <ellipse cx="205" cy="70" rx="11" ry="20" fill="none" stroke="currentColor" strokeWidth="5.5" transform="rotate(45 205 70)" />
    
    {/* Right seed */}
    <ellipse cx="235" cy="140" rx="20" ry="11" fill="none" stroke="currentColor" strokeWidth="5.5" />
    
    {/* Bottom-right seed (45°) */}
    <ellipse cx="205" cy="210" rx="11" ry="20" fill="none" stroke="currentColor" strokeWidth="5.5" transform="rotate(45 205 210)" />
    
    {/* Bottom seed */}
    <ellipse cx="150" cy="230" rx="11" ry="20" fill="none" stroke="currentColor" strokeWidth="5.5" />
    
    {/* Bottom-left seed (-45°) */}
    <ellipse cx="95" cy="210" rx="11" ry="20" fill="none" stroke="currentColor" strokeWidth="5.5" transform="rotate(-45 95 210)" />
    
    {/* Left seed */}
    <ellipse cx="65" cy="140" rx="20" ry="11" fill="none" stroke="currentColor" strokeWidth="5.5" />
    
    {/* Top-left seed (-45°) */}
    <ellipse cx="95" cy="70" rx="11" ry="20" fill="none" stroke="currentColor" strokeWidth="5.5" transform="rotate(-45 95 70)" />
  </svg>
);
