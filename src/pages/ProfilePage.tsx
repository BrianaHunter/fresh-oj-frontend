import { Carousel, Embla } from "@mantine/carousel";
import {
  Button,
  Container,
  Progress,
  Title,
  Grid,
  Card,
  Group,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import AppFooter from "../components/AppFooter";
import { DatePicker } from "@mantine/dates";
import MoodDonut from "../components/MoodDonut";
import AppContainer from "../components/AppContainer";
import ProfilePageImage from "../resources/ProfilePageImage.jpg";
import AppHeader from "../components/AppHeader";
import { useQuery } from "@tanstack/react-query";
// import { fetchEntries} from "../services/entry.service";
import { Entry } from "../types/entry.types";
import { Profile } from "../types/profile.types";
import { AuthContext } from "../context/auth.context";
import { getEntries } from "../services/entry.service";
// import { fetchEntries } from "../services/entry.service";

export default function ProfilePage() {
  const [userName, setUserName] = useState();
  const { user } = useContext(AuthContext);
  // const entries = useQuery(["entries"], fetchEntries);
  const entries = useQuery(
    ["/entries"],
    async () => await getEntries(user?._id as string)
  );

  useEffect(() => {}, []);
  //Started setting up useEffect here

  return (
    <div>
      <AppContainer header={<AppHeader />}>
        <div className="p-0 mt-10">
          <img className="w-full h-full  p-0 m-0" src={ProfilePageImage} />
        </div>
        <Container mb={200}>
          <Title className="poppin-font text-white text-5xl">
            Hi Again, {user?.displayName}
          </Title>
          <DatePicker
            className="poppin-font"
            placeholder="Pick date"
            label="Event date"
            withAsterisk
          />
          <Container mb={100}>
            <h1>Past Entries</h1>
            <div>
              <Grid>
                {/* {entries.map((entry) => {
                  <Grid.Col md={4} lg={4} sm={6}>
                    
                  </Grid.Col>
                })} */}

                {/* My thought was that we could render the entries on cards similar to how we rendered the suggestions... I started working on it, but it isn't working yet */}
              </Grid>
            </div>
          </Container>
          <Title className="poppin-font text-white">Recent Moods</Title>
          <MoodDonut />
        </Container>

        <AppFooter />
      </AppContainer>
    </div>
  );
}
