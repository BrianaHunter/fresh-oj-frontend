import React, { useEffect, useState } from "react";
import { fetchSuggestion } from "../services/suggestion.service";
import { Suggestion, SuggestionResults } from "../types/suggestion.types";
import { Card, Image, Text, Badge, Button, Group, Grid } from "@mantine/core";
import AppContainer from "../components/AppContainer";

export default function SuggestionPage() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  function getAllSuggestResults() {
    fetchSuggestion().then((response) => {
      setSuggestions(response);
      console.log(response);
    });
  }

  useEffect(() => {
    getAllSuggestResults();
  }, []);

  return (
    <AppContainer>
      <div>
        <h1>Helpful Tips and Suggestions</h1>
        <div>
          <Grid>
            {suggestions.map((suggestion) => (
              <Grid.Col md={3} lg={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image
                      className=" w-[200px] h-[200px]"
                      src={suggestion.ImageUrl}
                      alt="health"
                    />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>Norway Fjord Adventures</Text>
                    <Badge color="pink" variant="light">
                      On Sale
                    </Badge>
                  </Group>

                  <Text size="sm" color="dimmed">
                    With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the
                    fjords of Norway
                  </Text>

                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    Learn More
                  </Button>
                </Card>
              </Grid.Col>
              // <li key={suggestion.Title}>
              //   <div>
              //     <h2>{suggestion.Title}</h2>
              //   </div>
              //   <div>
              //     <p>{suggestion.Categories}</p>
              //   </div>
              //   <img
              //     className="h-[300px] w-[300px]"
              //     src={suggestion.ImageUrl}
              //   />
              // </li>
            ))}
          </Grid>
        </div>
      </div>
      {/* </div> */}
    </AppContainer>
  );
}
