import React, { useContext } from "react";
import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons";
import { AuthContext } from "../context/auth.context";
import { useQuery } from "@tanstack/react-query";
import { getEntries } from "../services/entry.service";

interface StatsRingMoodsProps {
  data: {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: "up" | "down";
  }[];
}

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

export default function MoodStats({ data }: StatsRingMoodsProps) {
  const { user } = useContext(AuthContext);
  const moods = [
    { title: "Happy", color: "#E38627" },
    { title: "Sad", color: "#C13C37" },
    { title: "Overjoyed", color: "#6A2105" },
    { title: "Mad", color: "#fff" },
    { title: "Okay", color: "#C17B37" },
    { title: "Anxious", color: "#2B2135" },
  ];

  const entries = useQuery(
    ["entries", user?._id],
    async () => await getEntries(user?._id as string)
  );

  const stats = data.map((moods) => {
    const Icon = [moods.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={moods.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: moods.progress, color: moods.color }]}
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {moods.label}
            </Text>
            <Text weight={700} size="xl">
              {moods.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
}
