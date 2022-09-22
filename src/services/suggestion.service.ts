import axios from "axios";
import { Suggestion, SuggestionResults } from "../types/suggestion.types";

export function fetchSuggestion() {
  return axios
    .get<SuggestionResults>(
      "https://health.gov/myhealthfinder/api/v3/topicsearch.json?CategoryId=109"
    )
    .then((response) => response.data.Result.Resources.Resource);
}
