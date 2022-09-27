import axios from "axios";
import { Suggestion, SuggestionResults } from "../types/suggestion.types";

export function fetchSuggestion() {
  return axios
    .get<SuggestionResults>(
      "https://health.gov/myhealthfinder/api/v3/topicsearch.json?CategoryId=20,108,107"
    )
    .then((response) => response.data.Result.Resources.Resource);
}

// Suggestions should render more articles now, but they are not rendering onto the page. Will need to look at that tomorrow
