// app/api/movies-actors/route.ts
import { NextResponse } from "next/server";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface KnownForItem {
  overview: string;
}

interface Actors {
  id: number;
  name: string;
  profile_path: string;
  known_for: KnownForItem[];
}

// Define config for API URL and API Key
const config = {
  apiUrl: process.env.TMDB_API_URL,
  apiKey: process.env.TMDB_API_SECRET_KEY, // Using an environment variable for the API key
};

const buildUrl = (
  path: string,
  params: { api_key: string; language: string },
): string => {
  const urlParams = new URLSearchParams(Object.entries(params));
  return `${config.apiUrl}${path}?${urlParams.toString()}`;
};

const popularMoviesUrl = buildUrl("movie/popular", {
  api_key: config.apiKey!,
  language: "en-US",
});

const popularActorsUrl = buildUrl("person/popular", {
  api_key: config.apiKey!,
  language: "en-US",
});

// API route handler
export async function GET(request: Request) {
  // Extract query params (filter, page) from the request URL
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter") as "movies" | "actors"; // Type narrowing
  const page = searchParams.get("page") || "1"; // Default page 1

  try {
    // Choose URL based on the filter (either movies or actors)
    const fetchUrl = filter === "movies" ? popularMoviesUrl : popularActorsUrl;

    // Fetch the data from the external API
    const res = await fetch(`${fetchUrl}&page=${page}`, { method: "GET" });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    // Parse the response
    const data = await res.json();
    const results =
      filter === "movies"
        ? (data.results as Movie[])
        : (data.results as Actors[]);

    return NextResponse.json(results); // Respond with the data as JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error(); // Return a generic server error response
  }
}
