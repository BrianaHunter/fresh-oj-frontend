import { Header, Title } from "@mantine/core";
import AccountMenu from "./AccountMenu";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <Header height={60} p="md">
      <div className="flex justify-between items-center h-full">
        <Link to="/" className="no-underline text-white">
          <Title color="tan" order={4}>
            Fresh OJ
          </Title>
        </Link>
        <AccountMenu />
      </div>
    </Header>
  );
}
