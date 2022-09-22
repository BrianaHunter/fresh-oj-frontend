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

const initialValue = "<p></p>";

export default function EntryPage() {
  const [value, onChange] = useState(initialValue);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // const user = await loginWithGoogle();
    // console.log(user);
    // navigate("/");
  };
  return (
    <AppContainer>
      <AppHeader />

      <Container>
        <Center>
          <Title mt={100} color="white" order={1}>
            What's on your mind?
          </Title>
        </Center>

        <Paper className="mt-5 p-3 px-7">
          <Radio.Group
            name="mood"
            label="How do you feel?"
            // description="This is anonymous"
            spacing="xl"
            // offset="md"
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
          value={value}
          controls={[
            ["bold", "italic", "underline", "link", "image"],
            ["unorderedList", "h1", "h2", "h3"],
            ["sup", "sub"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
          onChange={onChange}
        />
        <Link to="/suggestion">
          <Button
            className=""
            mt="md"
            variant="default"
            size="sm"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Link>
      </Container>
    </AppContainer>
  );
}
