import { Button, Stack, Center, Card, Text, Title } from "@mantine/core";
import { Embla } from "@mantine/carousel";
import { useCallback, useContext, useEffect, useState } from "react";
import AppContainer from "../components/AppContainer";
import AppHeader from "../components/AppHeader";
import BackGroundImage from "../resources/background-image-w-text.jpg";
import AppFooter from "../components/AppFooter";
import { Link } from "react-router-dom";
import { getEntries } from "../services/entry.service";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../context/auth.context";

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const { user } = useContext(AuthContext);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  const entries = useQuery(
    ["entries", user?._id],
    async () => await getEntries(user?._id as string)
  );

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <div>
      <AppContainer header={<AppHeader />}>
        <div className="p-0 mt-10 ">
          <img className="w-full h-full  p-0 m-0" src={BackGroundImage} />
        </div>
        <Stack>
          <Link to="/entry" className="font-medium !no-underline">
            <Center>
              <Button
                style={{ width: 600, height: 60 }}
                className="
              hover:bg-tan-200 bg-orangeSoda-200 text-lg shadow-md shadow-black-900 "
              >
                New Entry
              </Button>
            </Center>
          </Link>

          {/* <Center> */}
          <div className="flex sm:flex-col sm:justify-center  md:flex-col md:justify-center  lg:flex-row  lg:justify-center space-around mt-20">
            <Card
              shadow="sm"
              p="sm"
              radius="md"
              withBorder
              style={{
                height: "75%",
                width: "75%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "40px",
                paddingBottom: "40px",
                paddingRight: "20px",
              }}
              mb={40}
              ml={90}
              mr={90}
            >
              <Card.Section component="a">
                <Title className="poppin-font font-light text-orangeSoda-200 text-xl text-center px-3 pb-4">
                  Most recent entry
                </Title>
                <Text className="mt-3 poppin-font font-normal text-orangeSoda-200 text-3xl text-center px-3 pb-4">
                  {entries.data?.at(0)?.titleEntry}
                </Text>
              </Card.Section>
            </Card>

            <Card
              shadow="sm"
              p="sm"
              radius="md"
              withBorder
              style={{
                height: "75%",
                width: "75%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
              mb={40}
              ml={90}
              mr={90}
            >
              <Card.Section component="a">
                <Title className="poppin-font font-light text-orangeSoda-200 text-xl text-center pb-4">
                  Most Recent Mood
                </Title>
                <Text className="mt-6 poppin-font font-normal text-orangeSoda-200 text-4xl text-center pb-9">
                  {entries.data?.at(0)?.mood}
                </Text>
              </Card.Section>
            </Card>

            <Card
              shadow="sm"
              p="sm"
              radius="md"
              withBorder
              style={{
                height: "75%",
                width: "75%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
              mb={80}
              ml={90}
              mr={90}
            >
              <Card.Section component="a">
                <Title className="poppin-font font-light text-orangeSoda-200 text-xl text-center pb-4">
                  Total Entries
                </Title>
                <Text className="mt-3 poppin-font font-normal text-orangeSoda-200 text-7xl text-center pb-4">
                  {entries.data?.length}
                </Text>
              </Card.Section>
            </Card>
          </div>
        </Stack>

        <AppFooter />
      </AppContainer>
    </div>
  );
}
