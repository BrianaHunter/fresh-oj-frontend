import { Carousel, Embla } from "@mantine/carousel";
import { Button, Container, Progress, Title } from "@mantine/core";
import { useState } from "react";
import AppFooter from "../components/AppFooter";
import { DatePicker } from "@mantine/dates";
import MoodDonut from "../components/MoodDonut";
import AppContainer from "../components/AppContainer";
import ProfilePageImage from "../resources/ProfilePageImage.jpg";
import AppHeader from "../components/AppHeader";

export default function ProfilePage() {
  // const userName = ()
  return (
    <div>
      <AppContainer header={<AppHeader />}>
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
