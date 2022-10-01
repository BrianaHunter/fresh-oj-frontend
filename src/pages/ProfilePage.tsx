import {
  Button,
  Container,
  Title,
  Grid,
  Card,
  Group,
  Modal,
  TypographyStylesProvider,
  useMantineTheme,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import AppFooter from "../components/AppFooter";
import { DatePicker } from "@mantine/dates";
import MoodDonut from "../components/MoodDonut";
import AppContainer from "../components/AppContainer";
import ProfilePageImage from "../resources/ProfilePageImage.jpg";
import AppHeader from "../components/AppHeader";
import { useQuery } from "@tanstack/react-query";
import { Entry } from "../types/entry.types";
import { AuthContext } from "../context/auth.context";
import { getEntries } from "../services/entry.service";
import dayjs from "dayjs";
import { IconTrash } from "@tabler/icons";
import { EntryListContext } from "../context/entry-context";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [showEntry, setShowEntry] = useState(false);
  const [closeEntry, setCloseEntry] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState<Entry>({} as Entry);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { entryList, removeEntry } = useContext(EntryListContext);

  const entries = useQuery(
    ["entries", user?._id, dayjs(selectedDate).format("MM/DD/YYYY")],
    async () =>
      await getEntries(
        user?._id as string,
        dayjs(selectedDate).format("MM/DD/YYYY")
      )
  );

  function showEntryDetails(entry: Entry) {
    setSelectedEntry(entry);
    setShowEntry(true);
  }

  const theme = useMantineTheme();
  // used for styling the modal

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
          <Title className="poppin-font font-extralight text-white text-7xl mb-7">
            {user?.displayName}
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
            <h1 className="poppin-font font-extralight text-white text-5xl mt-20 mb-10">
              Past Entries
            </h1>
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

                      <IconTrash
                        className="absolute top-0 right-0 h-7 w-7 p-1 text-orangeSoda-200"
                        onClick={() => removeEntry(entry.titleEntry)}
                      />

                      <Group position="apart" mt="md" mb="xs">
                        <Title
                          order={5}
                          weight={600}
                          className="poppin-font font-light text-2xl"
                        >
                          {entry.titleEntry}
                        </Title>
                      </Group>

                      <Modal
                        overlayColor={
                          theme.colorScheme === "dark"
                            ? theme.colors.gray[3]
                            : theme.colors.yellow[9]
                        }
                        overlayOpacity={0.6}
                        overlayBlur={3}
                        centered
                        size="lg"
                        onClose={() => setShowEntry(false)}
                        overflow="inside"
                        opened={showEntry}
                        closeOnClickOutside={closeEntry}
                        className="mt-[-280px]"
                      >
                        <p className="poppin-font text-5xl px-5">
                          {selectedEntry.mood}
                        </p>
                        <p className="border-solid border-b-0 border-orangeSoda-200 mt-[-10px] mb-10 px-5"></p>
                        <TypographyStylesProvider className="poppin-font text-lg px-5">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: selectedEntry.content,
                            }}
                          />
                        </TypographyStylesProvider>
                      </Modal>

                      <Button
                        className=" hover:bg-tan-200 bg-orangeSoda-200 text-white"
                        variant="light"
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
          <Title className="poppin-font font-extralight text-5xl text-white mb-10">
            Recent Moods
          </Title>
          <MoodDonut />
        </Container>

        <AppFooter />
      </AppContainer>
    </div>
  );
}
