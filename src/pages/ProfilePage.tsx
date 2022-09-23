import { Carousel, Embla } from "@mantine/carousel";
import { Button, Container, Progress, Title } from "@mantine/core";
import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import ProfilePageImage from "../resources/ProfilePageImage.jpg";
import { DatePicker } from "@mantine/dates";
import MoodDonut from "../components/MoodDonut";

export default function ProfilePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  // const userName = ()
  return (
    <div>
      <AppContainer>
        <AppHeader />
        <div className="p-0 mt-10">
          <img className="w-full h-full  p-0 m-0" src={ProfilePageImage} />
        </div>
        <Container mb={200}>
          <Title className="poppin-font text-white text-5xl">Hi Again, </Title>
          <DatePicker
            className="poppin-font"
            placeholder="Pick date"
            label="Event date"
            withAsterisk
          />
          <Title className="poppin-font text-white">Recent Moods</Title>
          <MoodDonut />
        </Container>

        <AppFooter />
      </AppContainer>
    </div>
  );
}
