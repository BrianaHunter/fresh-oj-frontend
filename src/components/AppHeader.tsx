import React from "react";
import { Header, Title } from "@mantine/core";
import AccountMenu from "./AccountMenu";

export default function AppHeader() {
  return (
    <div>
      <Header height={60} p="md" withBorder>
        <div className="flex justify-between items-center h-full">
          <Title color="tan" order={4}>
            Fresh OJ
          </Title>
        </div>
      </Header>
    </div>
  );
}
