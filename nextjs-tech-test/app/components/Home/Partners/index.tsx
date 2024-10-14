// This is a server component data is statically generated on build
// Import necessary components and functions
import { Suspense } from "react";
import AnchorSection from "../../Common/AnchorSection";
import PartnerProfile from "./PartnerProfile";
import SkeletonLoader from "../../Common/SkeletonLoader";

// Define the interface for a known-for item
interface KnownForItem {
  overview: string;
}

// Define the interface for an actor
interface Actors {
  id: number;
  name: string;
  profile_path: string;
  known_for: KnownForItem[];
}

// Fetch actor data from the API, caching it for a day
export async function fetchActors(limit: number): Promise<Actors[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // Use environment variable for the base URL

  // Ensure the base URL is defined
  if (!baseUrl) {
    throw new Error("API Base URL is not defined");
  }
  const filter = "actors";
  const res = await fetch(
    `${baseUrl}/api/movies-actors?filter=${filter}&page=1`,
    {
      next: { revalidate: 86400 }, // Revalidate once every 24 hours (86400 seconds)
    },
  );
  const result = await res.json();
  return result.slice(0, limit);
}

// Create a statically generated Partners component
export default async function Partners() {
  const actors = await fetchActors(16); // Fetch 16 actors
  const visibleActors = actors.slice(0, 4); // Display only the first 4 actors initially

  return (
    <AnchorSection
      id="meet-a-partner"
      title="Meet a partner for your best holiday"
      ariaLabel="partner-heading"
    >
      <Suspense
        fallback={
          <div className="flex justify-between mt-10 flex-wrap">
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonLoader
                key={index}
                width="sm:w-[31.5%]"
                height="h-[400px]"
              />
            ))}
          </div>
        }
      >
        <PartnerProfile actors={actors} visibleActors={visibleActors} />;
      </Suspense>
    </AnchorSection>
  );
}
