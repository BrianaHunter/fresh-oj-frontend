export type Suggestion = {
  id: number;
  title: string;
  imageUrl: string;
};

export type SuggestionResults = {
  results: Suggestion[];
};
