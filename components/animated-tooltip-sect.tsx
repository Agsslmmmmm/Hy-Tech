"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
const people = [
  
  {
    id: 1,
    name: "Agus Salim",
    designation: "Front End Dev",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  
  {
    id: 4,
    name: "Fitri HY",
    designation: "Backend Dev",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 mt-20 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
