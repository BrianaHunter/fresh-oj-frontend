import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function MoodDonut() {
  const data = [
    { title: "Happy", value: 16.67, color: "#E38627" },
    { title: "Sad", value: 16.67, color: "#C13C37" },
    { title: "Overjoyed", value: 16.67, color: "#6A2105" },
    { title: "Mad", value: 16.66, color: "#fff" },
    { title: "Okay", value: 16.66, color: "#C17B37" },
    { title: "Anxious", value: 16.66, color: "#2B2135" },
  ];

  return (
    <div>
      <PieChart data={data} lineWidth={35} rounded className="w-64 h-64" />
    </div>
  );
}
