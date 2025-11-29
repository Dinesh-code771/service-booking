import React, { use } from "react";

export default function SuggestionCard({
  suggestionsPromise,
}: {
  suggestionsPromise: Promise<any>;
}) {
  const suggestions = use(suggestionsPromise);

  return (
    <div>
      <h1>Suggestions</h1>
      {suggestions.map((suggestion: any) => (
        <div key={suggestion.id}>{suggestion.title}</div>
      ))}
    </div>
  );
}
