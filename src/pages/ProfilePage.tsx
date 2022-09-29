import { Carousel, Embla } from "@mantine/carousel";
import {
  Button,
  Container,
  Progress,
  Title,
  Grid,
  Card,
  Group,
  Modal,
  Center,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import AppFooter from "../components/AppFooter";
import {
  DatePicker,
  DateRangePicker,
  DateRangePickerValue,
} from "@mantine/dates";
import MoodDonut from "../components/MoodDonut";
import AppContainer from "../components/AppContainer";
import ProfilePageImage from "../resources/ProfilePageImage.jpg";
import AppHeader from "../components/AppHeader";
import { useQuery } from "@tanstack/react-query";
// import { fetchEntries} from "../services/entry.service";
import { Entry, EntryResults } from "../types/entry.types";
import { Profile } from "../types/profile.types";
import { AuthContext } from "../context/auth.context";
import { getEntries, getEntry } from "../services/entry.service";
import { profile } from "console";
import dayjs from "dayjs";

// import { fetchEntries } from "../services/entry.service";

export default function ProfilePage() {
  const [userName, setUserName] = useState();
  const { user } = useContext(AuthContext);
  const [showEntry, setShowEntry] = useState(false);
  const [closeEntry, setCloseEntry] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState<Entry>({} as Entry);
  // const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const [value, setValue] = useState<DateRangePickerValue>([
  //   new Date(2022, 9, 1),
  //   new Date(2022, 9, 30),
  // ]);
  // console.log(value[0]?.toISOString());

  const entries = useQuery(
    ["entries", user?._id, dayjs(selectedDate).format("MM/DD/YYYY")],
    async () =>
      await getEntries(
        user?._id as string,
        dayjs(selectedDate).format("MM/DD/YYYY")
      )
  );

  useEffect(() => {}, []);
  //Started setting up useEffect here

  function showEntryDetails(entry: Entry) {
    setSelectedEntry(entry);
    setShowEntry(true);
  }

  return (
    <div>
      <AppContainer header={<AppHeader />}>
        <div className="flex p-0 mt-10">
          <img
            className="align-center w-full h-full p-0 m-0"
            src={ProfilePageImage}
          />
          <img
            className="justify-self-center w-auto h-32 rounded-full"
            src={user?.photoURL}
          />
        </div>
        <Container mb={200}>
          <Title className="poppin-font text-white text-5xl">
            Hi Again, {user?.displayName}
          </Title>
          <div className="">
            <DatePicker
              className="poppin-font"
              placeholder="Pick date"
              label="Event date"
              allowFreeInput
              value={selectedDate}
              onChange={setSelectedDate}
              // withAsterisk
            />
          </div>
          <Container mb={100}>
            <h1 className="poppin-font text-white">Past Entries</h1>
            <div>
              <Grid>
                {entries?.data?.map((entry) => (
                  <Grid.Col md={4} lg={4} sm={6}>
                    <Card
                      key={entry._id}
                      shadow="sm"
                      p="lg"
                      radius="md"
                      withBorder
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Card.Section component="a"></Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Title order={5} weight={600}>
                          {entry.title}
                          Mood: {entry.mood}
                        </Title>
                      </Group>
                      <Modal
                        className="bg-tan-100"
                        onClose={() => setShowEntry(false)}
                        title={entry.title}
                        overflow="inside"
                        opened={showEntry}
                        closeOnClickOutside={closeEntry}
                      >
                        {selectedEntry.content}
                        {/* selected entry gives us the entry for the given mood it matches */}
                      </Modal>

                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md"
                        component="a"
                        onClick={() => showEntryDetails(entry)}
                      >
                        Read Entry
                      </Button>
                    </Card>
                  </Grid.Col>
                ))}
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
