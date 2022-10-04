import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { AuthContext } from "../context/auth.context";
import { getEntries } from "../services/entry.service";
import Moods from "./Moods";

export default function MoodDonut() {
  const [happyMoods, setHappyMoods] = useState(0);
  const [sadMoods, setSadMoods] = useState(0);
  const [overjoyedMoods, setOverjoyedMoods] = useState(0);
  const [madMoods, setMadMoods] = useState(0);
  const [okayMoods, setOkayMoods] = useState(0);
  const [anxiousMoods, setAnxiousMoods] = useState(0);
  const { user } = useContext(AuthContext);

  const hasNoMoods =
    happyMoods === 0 &&
    sadMoods === 0 &&
    overjoyedMoods === 0 &&
    madMoods === 0 &&
    okayMoods === 0 &&
    anxiousMoods === 0;

  const hasHappyMoods = happyMoods !== 0;
  const hasSadoods = sadMoods !== 0;
  const hasOverjoyedMoods = overjoyedMoods !== 0;
  const hasMadMoods = madMoods !== 0;
  const hasOkayMoods = okayMoods !== 0;
  const hasAnxiousMoods = anxiousMoods !== 0;

  const totalMoods =
    happyMoods +
    sadMoods +
    overjoyedMoods +
    madMoods +
    okayMoods +
    anxiousMoods;

  const happyPercent = ((happyMoods / totalMoods) * 100).toFixed(1);
  const sadPercent = ((sadMoods / totalMoods) * 100).toFixed(1);
  const overjoyedPercent = ((overjoyedMoods / totalMoods) * 100).toFixed(1);
  const madPercent = ((madMoods / totalMoods) * 100).toFixed(1);
  const okayPercent = ((okayMoods / totalMoods) * 100).toFixed(1);
  const anxiousPercent = ((anxiousMoods / totalMoods) * 100).toFixed(1);

  const moods = [
    {
      title: "Happy",
      value: { happyPercent },
      color: "#E38627",
    },
    { title: "Sad", value: { sadPercent }, color: "#C13C37" },
    { title: "Overjoyed", value: { overjoyedPercent }, color: "#6A2105" },
    { title: "Mad", value: { madPercent }, color: "#fff" },
    { title: "Okay", value: { okayPercent }, color: "#C17B37" },
    { title: "Anxious", value: { anxiousPercent }, color: "#2B2135" },
  ];

  const entries = useQuery(
    ["entries", user?._id],
    async () => await getEntries(user?._id as string)
  );

  return (
    <div>
      <PieChart data={moods} lineWidth={35} rounded className=" w-80 h-80" />
    </div>
  );
}
