export type Suggestion = {
  Id: number;
  Title: string;
  ImageUrl: string;
  LastUpdate: string;
  HealthfinderUrl: string;
  Categories: string;
  AccessibleVersion: string;
};

export type SuggestionResults = {
  Result: {
    Resources: {
      Resource: Suggestion[];
    };
  };
};
