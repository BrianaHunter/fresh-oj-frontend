import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { Button, Center, Container, Space, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
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
        <RichTextEditor
          classNames={{ root: "mt-10 h-[600px] overflow-y-scroll" }}
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
        <Button
          className=""
          mt="md"
          variant="default"
          size="sm"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </AppContainer>
  );
}
