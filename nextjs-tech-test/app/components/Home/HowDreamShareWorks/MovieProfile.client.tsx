// // This line indicates that the component uses the client-side rendering approach (React)
"use client";
// Import necessary components and functions
import { useState } from "react";
import MovieCard from "./MovieCard";

// Define an interface for the movie data structure
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
interface Props {
  movies: Movie[];
}
// Create the `MoviesProfile` functional component
const MovieProfile = ({ movies }: Props) => {
  // Define state variables for managing data and UI state
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>(
    movies.slice(0, 3),
  );
  const [count, setCount] = useState(3); // Number of movies to display initially

  // Function to handle loading more movies
  const handleLoadMore = () => {
    const newCount = count + 3;
    setCount(newCount);
    setVisibleMovies(movies.slice(0, newCount)); // Update visible movies based on new count
  };

  // Function to handle loading less movies (ensures at least 3 are displayed)
  const handleLoadLess = () => {
    const newCount = Math.max(3, count - movies.length);
    setCount(newCount);
    setVisibleMovies(movies.slice(0, newCount));
    scrollToSection(); // Scroll back to the section after loading less
  };

  // Function to scroll to a section using the provided reference
  const scrollToSection = () => {
    const section = document.getElementById("how-dreamshare-works");
    section?.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
  };

  // Return the JSX structure for rendering the section
  return (
    <>
      <div className="flex justify-between mt-10 flex-wrap">
        {
          //Iterate over the `visibleMovies` array and render `MovieCard` components for each movie
          visibleMovies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              trendingNumber={index + 1}
              imageUrl={movie.poster_path}
              title={movie.title}
              description={movie.overview}
            />
          ))
        }
      </div>
      {/* Conditionally render load more/load less buttons based on the number of visible movies */}
      <div className="flex justify-center">
        {visibleMovies.length < movies.length ? (
          <button
            onClick={handleLoadMore}
            className="bg-blazingRed text-white py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={handleLoadLess}
            className="bg-blazingRed text-white py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Load Less
          </button>
        )}
      </div>
    </>
  );
};

export default MovieProfile;
