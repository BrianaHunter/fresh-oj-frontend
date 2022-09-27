import { Button, ActionIcon, Footer } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { IconDots, IconHome, IconUserCircle } from "@tabler/icons";

export default function AppFooter() {
  return (
    <div>
      <Footer height={50} p="md">
        <div className="flex justify-between px-10">
          <Link to="/suggestions">
            <ActionIcon>
              <IconDots
                // style={{ width: "48px", height: "48px" }}
                className="text-orangeSoda-200"
              />
            </ActionIcon>
          </Link>
          <Link to="/">
            <ActionIcon>
              <IconHome
                style={{ width: "48px", height: "48px" }}
                className="text-orangeSoda-200"
              />
            </ActionIcon>
          </Link>

          <Link to="/profile">
            <ActionIcon>
              <IconUserCircle
                style={{ width: "48px", height: "48px" }}
                className="text-orangeSoda-200"
              />
            </ActionIcon>
          </Link>
        </div>
      </Footer>
    </div>
  );
}
