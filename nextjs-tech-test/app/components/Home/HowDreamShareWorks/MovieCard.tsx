// Import the `Image` component from `next/image` for optimized image handling
import Image from "next/legacy/image";
// Define the type of props accepted by the `MovieCard` component
type MovieCardProps = {
  imageUrl: string; // URL of the step card image
  trendingNumber: number; // Step number to display
  title: string; // Title of the step
  description: string; // Description of the step
};
// Create the functional component named `MovieCard`

const MovieCard = ({
  imageUrl,
  trendingNumber,
  title,
  description,
}: MovieCardProps) => {
  // Return the JSX structure for rendering the step card
  return (
    <div
      className="w-full sm-md:w-[31.5%] md:w-[31.5%] relative bg-gradient-to-tr from-blazingRed
     to-blazingYellow h-[400px] rounded-lg overflow-hidden mb-10 shadow-md transition-all duration-300
      ease-in-out focus:outline-none focus:ring-2 focus:ring-blazingRed focus:rounded-md group"
      tabIndex={0}
      role="button"
      aria-label={`View Movies details: ${title}`}
    >
      {/* Image */}
      <Image
        // Construct the image URL using TMDB image path prefix
        src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
        role="img"
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        aria-label={`Movie: ${title}`}
      />

      {/* Dark overlay on hover or focus */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 group-focus:bg-opacity-50 transition duration-300 ease-in-out"></div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content (Text, Button, etc.) positioned at the bottom */}
      <div className="absolute bottom-0 p-5 z-10">
        <div className="h-20 pb-5 flex items-start">
          <p className="text-white uppercase text-xs font-montserrat font-light bg-blazingRed px-4 py-1 rounded-3xl">
            Trending {`#${trendingNumber}`}
          </p>
        </div>
        <div className="card-body">
          {/* Title displayed with line clamping to limit the number of lines */}
          <div className="h-20">
            <h3 className="font-montserrat text-white text-2xl line-clamp-2">
              {title}
            </h3>
          </div>
          {/* Description displayed with line clamping to limit the number of lines */}
          <div className="h-20">
            <p className="font-roboto text-sm text-white line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
