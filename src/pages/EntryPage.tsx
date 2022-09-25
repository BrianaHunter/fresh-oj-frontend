import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import {
  Button,
  Center,
  Container,
  Paper,
  Radio,
  Space,
  Title,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { addEntry } from "../services/entry.service";
import { Entry } from "../types/entry.types";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../libs/react-query";
import { AxiosError } from "axios";

export default function EntryPage(entry: Entry) {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Entry>();

  const addEntryMutation = useMutation(addEntry, {
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries(["entries", entry?._id]);
    },
    onError: (error: AxiosError) => {
      setError("Something went wrong...");
    },
  });
  const onSubmit = async (entryData: Partial<Entry>) => {
    await addEntryMutation.mutateAsync({ content: entry?._id, ...entryData });
  };
  // const handleSubmit = async () => {
  //   const entry = await addEntry(data);
  //   console.log({ content, mood });
  //   navigate("/suggestions");
  // };
  return (
    <AppContainer>
      <AppHeader />

      <Container mb={100}>
        <Center>
          <Title mt={100} color="white" order={1}>
            What's on your mind?
          </Title>
        </Center>

        <Paper className="mt-5 p-3 px-7">
          <Radio.Group
            name="mood"
            label="How do you feel?"
            spacing="xl"
            onChange={setMood}
            withAsterisk
          >
            <div className="flex justify-between w-full">
              <Radio value="Overjoyed" label="Overjoyed" />
              <Radio value="Happy" label="Happy" />
              <Radio value="Okay" label="Okay" />
              <Radio value="Sad" label="Sad" />
              <Radio value="Mad" label="Mad" />
              <Radio value="Anxious" label="Anxious" />
            </div>
          </Radio.Group>
        </Paper>

        <RichTextEditor
          classNames={{ root: "mt-7 h-[600px] overflow-y-scroll" }}
          //   mt={40}
          value={content}
          controls={[
            ["bold", "italic", "underline", "link", "image"],
            ["unorderedList", "h1", "h2", "h3"],
            ["sup", "sub"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
          onChange={setContent}
        />
        <Link to="/suggestion">
          <Button
            className=""
            mt="md"
            variant="default"
            size="sm"
            // onClick={handleSubmit}
            onClick={handleSubmit(onSubmit)}
            loading={isSubmitting}
          >
            Submit
          </Button>
        </Link>
      </Container>
      <AppFooter />
    </AppContainer>
  );
}
