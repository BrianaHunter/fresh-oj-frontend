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
  Header,
  Title,
} from "@mantine/core";
import AppContainer from "../components/AppContainer";
import AppFooter from "../components/AppFooter";
import { useQuery } from "@tanstack/react-query";
import AppHeader from "../components/AppHeader";
import { Link } from "react-router-dom";
// import fontFamily from "../resources/iCielGotham-Medium.ttf";

export default function SuggestionPage() {
  const suggestions = useQuery(["suggestions"], fetchSuggestion);

  return (
    <AppContainer>
      <Header height={60} p="md">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="no-underline text-white">
            <Title color="tan" order={4}>
              Fresh OJ
            </Title>
          </Link>
          <div>
            <a href="https://health.gov/myhealthfinder" title="MyHealthfinder">
              <img
                src="https://health.gov/themes/custom/healthfinder/images/MyHF.svg"
                alt="MyHealthfinder"
                className=" w-32 h-auto"
              />
            </a>
          </div>
        </div>
      </Header>

      <Container mb={100} mt={80}>
        <div className="flex justify-around">
          <h1 className="poppin-font font-light text-white lg:text-5xl md:text-4xl sm:text-4xl">
            Helpful Tips and Suggestions
          </h1>
        </div>
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
                    className="
                    hover:bg-tan-100 bg-orangeSoda-100 mt-5 text-white"
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
