import { Suspense } from "react";
// Import necessary components and functions

import AnchorSection from "../../Common/AnchorSection";
import MovieProfile from "./MovieProfile.client";
import SkeletonLoader from "../../Common/SkeletonLoader";

// Define the Movie interface
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

// Fetch movies on the server side
async function fetchMovies(limit: number): Promise<Movie[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // Use environment variable for the base URL

  // Ensure the base URL is defined
  if (!baseUrl) {
    throw new Error("API Base URL is not defined");
  }
  const filter = "movies";
  const res = await fetch(
    `${baseUrl}/api/movies-actors?filter=${filter}&page=1`,
    {
      next: { revalidate: 86400 }, // Revalidate once every 24 hours (86400 seconds)
    },
  );
  const result: Movie[] = await res.json();
  return result.slice(0, limit);
}

const HowDreamshareWorks = async () => {
  const movies = await fetchMovies(15); // Fetch 15 movies;
  return (
    <AnchorSection
      id="how-dreamshare-works"
      title="How Dreamshare works?"
      ariaLabel="how-dreamshare-works-heading"
    >
      <Suspense
        fallback={
          <div className="w-full flex flex-col md:flex-row justify-between">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                className="w-full sm:w-[50%] md:w-[50%] lg:w-[23.5%]"
                key={index}
              >
                <div className="flex justify-center my-5">
                  <SkeletonLoader
                    width="w-[128px]"
                    height="h-[128px]"
                    circular
                  />
                </div>
                <SkeletonLoader width="w-full" height="h-[128px]" />
              </div>
            ))}
          </div>
        }
      >
        <MovieProfile movies={movies} />
      </Suspense>
    </AnchorSection>
  );
};

export default HowDreamshareWorks;
