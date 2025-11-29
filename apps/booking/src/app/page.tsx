// app/page.tsx (Server Component)
import { Suspense } from "react";
import SuggestionCard from "./_components/SuggestionCard";
import Link from "next/link";

function getSuggestions() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((r) => r.json())
    .then(async (data) => {
      await new Promise((res) => setTimeout(res, 5000)); // slow part
      return data;
    });
}

export default function Home() {
  const suggestionsPromise = getSuggestions(); // ❗ don't await here

  return (
    <main className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello World</h1>

      <Suspense fallback={<div>Loading suggestions…</div>}>
        <SuggestionCard suggestionsPromise={suggestionsPromise} />
      </Suspense>

      <Link href="/dinesh" className="text-blue-500">
        Dinesh
      </Link>
    </main>
  );
}
