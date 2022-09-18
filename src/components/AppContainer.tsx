import { AppShell, Header, Group, Title } from "@mantine/core";
import React from "react";

interface Props {
  children: React.ReactNode;
  header?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export default function AppContainer({ children, header }: Props) {
  return (
    <div className="bg-tan-100">
      <AppShell navbarOffsetBreakpoint="sm" padding="md" header={header}>
        {children}
      </AppShell>
    </div>
  );
}
