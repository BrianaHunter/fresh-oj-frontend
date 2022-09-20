// import { useDisclosure } from "@mantine/hooks";
// import { IconPlus } from "@tabler/icons";
// import { useContext } from "react";
// import { useQuery } from "@tanstack/react-query";
import {
  AppShell,
  Button,
  Group,
  Header,
  Progress,
  Stack,
  Title,
  Image,
  BackgroundImage,
  ColorInput,
} from "@mantine/core";
import { Carousel, Embla } from "@mantine/carousel";
import { IconPlus } from "@tabler/icons";
import { useCallback, useEffect, useState } from "react";
import AppContainer from "../components/AppContainer";
import AppHeader from "../components/AppHeader";
import BackGroundImage from "../images/background-image-w-text.jpg";
import AppFooter from "../components/AppFooter";
import FreshOjLogo from "../images/FreshOJlogo.svg";

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <div>
      <AppContainer header={<AppHeader />}>
        <div className="p-0 mt-10">
          <img className="w-full h-full  p-0 m-0" src={BackGroundImage} />
        </div>
        <Stack>
          <Button className="bg-tan-200">New Entry</Button>
          <div className="text-center">My Stats</div>

          <Carousel
            dragFree
            slideSize="30%"
            slideGap="md"
            height={200}
            getEmblaApi={setEmbla}
            initialSlide={1}
          >
            <Carousel.Slide className="bg-white">Enteries</Carousel.Slide>
            <Carousel.Slide className="bg-white">Moods</Carousel.Slide>
            <Carousel.Slide className="bg-white">Frequent</Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
          <Progress
            value={scrollProgress}
            styles={{
              bar: { transitionDuration: "0ms" },
              root: { maxWidth: 320 },
            }}
            size="sm"
            mt="xl"
            mx="auto"
          />
        </Stack>
        <AppFooter />
      </AppContainer>
    </div>
  );
}
