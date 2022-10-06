import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { AuthContext } from "../context/auth.context";
import { getEntries } from "../services/entry.service";
import Moods from "./Moods";
import { RingProgress, Text } from "@mantine/core";

export default function MoodDonut() {
  const { user } = useContext(AuthContext);

  const entries = useQuery(
    ["entries", user?._id],
    async () => await getEntries(user?._id as string)
  );

  const happyMoods = entries?.data?.filter(
    (entry) => entry.mood === "Happy"
  ).length;
  const sadMoods = entries?.data?.filter(
    (entry) => entry.mood === "Sad"
  ).length;
  const overjoyedMoods = entries?.data?.filter(
    (entry) => entry.mood === "Overjoyed"
  ).length;
  const madMoods = entries?.data?.filter(
    (entry) => entry.mood === "Mad"
  ).length;
  const okayMoods = entries?.data?.filter(
    (entry) => entry.mood === "Okay"
  ).length;
  const anxiousMoods = entries?.data?.filter(
    (entry) => entry.mood === "Anxious"
  ).length;

  // const hasNoMoods =
  //   happyMoods === 0 &&
  //   sadMoods === 0 &&
  //   overjoyedMoods === 0 &&
  //   madMoods === 0 &&
  //   okayMoods === 0 &&
  //   anxiousMoods === 0;

  // const hasHappyMoods = happyMoods !== 0;
  // const hasSadoods = sadMoods !== 0;
  // const hasOverjoyedMoods = overjoyedMoods !== 0;
  // const hasMadMoods = madMoods !== 0;
  // const hasOkayMoods = okayMoods !== 0;
  // const hasAnxiousMoods = anxiousMoods !== 0;

  // const totalMoods =
  //   happyMoods as number +
  //   sadMoods as number+
  //   overjoyedMoods as number +
  //   madMoods as number +
  //   okayMoods as number+
  //   anxiousMoods as number;

  // const happyPercent = parseInt(((happyMoods / totalMoods) * 100).toFixed(1));
  // const sadPercent = parseInt(((sadMoods / totalMoods) * 100).toFixed(1));
  // const overjoyedPercent = parseInt(
  //   ((overjoyedMoods / totalMoods) * 100).toFixed(1)
  // );
  // const madPercent = parseInt(((madMoods / totalMoods) * 100).toFixed(1));
  // const okayPercent = parseInt(((okayMoods / totalMoods) * 100).toFixed(1));
  // const anxiousPercent = parseInt(
  //   ((anxiousMoods / totalMoods) * 100).toFixed(1)
  // );

  return (
    <div className="flex justify-center pt-10 pb-0">
      <RingProgress
        size={300}
        thickness={30}
        roundCaps
        label={
          <Text size="xl" align="center" color="white">
            Recent Moods
          </Text>
        }
        sections={[
          { tooltip: "Happy", value: happyMoods as number, color: "#E38627" },
          { tooltip: "Sad", value: sadMoods as number, color: "#C13C37" },
          {
            tooltip: "Overjoyed",
            value: overjoyedMoods as number,
            color: "#6A2105",
          },
          { tooltip: "Mad", value: madMoods as number, color: "#fff" },
          { tooltip: "Okay", value: okayMoods as number, color: "#C17B37" },
          {
            tooltip: "Anxious",
            value: anxiousMoods as number,
            color: "#2B2135",
          },
        ]}
      />
    </div>
  );
}
