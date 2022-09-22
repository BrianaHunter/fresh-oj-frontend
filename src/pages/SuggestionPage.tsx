import React, { useState } from "react";
import { fetchSuggestion } from "../services/suggestion.service";
import { Suggestion, SuggestionResults } from "../types/suggestion.types";

export default function SuggestionPage() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  function getAllSuggestResults() {
    fetchSuggestion().then((response) => {
      setSuggestions(response);
      console.log(response);
    });
  }

  return (
    <div>
      <div>
        <h1>Helpful Tips and Suggestions</h1>
        <div className="border-2 border-black">
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.Title}>
                <div>
                  <h2>{suggestion.Title}</h2>
                </div>
                <div>
                  <p>{suggestion.Categories}</p>
                </div>
                <img
                  src={
                    "https://health.gov/sites/default/files/" +
                    suggestion.ImageUrl
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
