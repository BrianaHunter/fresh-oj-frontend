import React, { useEffect, useState } from "react";
import { fetchSuggestion } from "../services/suggestion.service";
import { Suggestion, SuggestionResults } from "../types/suggestion.types";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Center,
  Container,
} from "@mantine/core";
import AppContainer from "../components/AppContainer";
import AppFooter from "../components/AppFooter";
import { useQuery } from "@tanstack/react-query";
// import fontFamily from "../resources/iCielGotham-Medium.ttf";

export default function SuggestionPage() {
  const suggestions = useQuery(["suggestions"], fetchSuggestion);

  return (
    <AppContainer>
      <Container mb={100}>
        <h1>Helpful Tips and Suggestions</h1>
        <div>
          <Grid>
            {suggestions?.data?.map((suggestion) => (
              <Grid.Col md={4} lg={4} sm={6}>
                <Card
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
                  <Card.Section
                    component="a"
                    href={suggestion.AccessibleVersion}
                  >
                    <Image
                      src={suggestion.ImageUrl}
                      alt="health"
                      style={{
                        maxHeight: 200,
                        maxWidth: 200,
                        padding: 15,
                      }}
                    />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={600}>{suggestion.Title}</Text>
                  </Group>

                  <Text size="sm" color="dimmed">
                    {suggestion.Categories}
                  </Text>

                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    component="a"
                    href={suggestion.AccessibleVersion}
                  >
                    Learn More
                  </Button>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Container>
      <AppFooter />
    </AppContainer>
  );
}
