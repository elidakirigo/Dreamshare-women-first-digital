// Import the `Image` component from `next/image` for optimized image handling
import Image from "next/legacy/image";
// Define the type of available width variants
type WidthVariants = {
  sm: string;
  lg: string;
};
// Define the type of props for the `ActivityCard` component
type ActivityCardProps = {
  // Optional property to specify the width variant (sm or lg)
  width: keyof WidthVariants;
  // Required property for the image URL
  image: string;
  // Required property for the image URL
  fallBackImage: string;
  // Required property for the card title
  title: string;
  // Required property for background positioning
  backgroundPosition: string;
};

// Create a functional component named `ActivityCard`
const ActivityCard = ({
  width = "sm",
  image,
  fallBackImage,
  title,
  backgroundPosition,
}: ActivityCardProps) => {
  // Define the mapping of width variants to their CSS classes
  const widthVariants: WidthVariants = {
    sm: "sm-md:w-[31.5%] md:w-[31.5%]",
    lg: "sm-md:w-[66%] md:w-[66%]",
  };
  // Return the JSX structure for rendering the activity card
  return (
    <div
      // Combine the base class with the width variant class
      className={`w-full ${widthVariants[width]} relative bg-gradient-to-tr from-blazingRed to-blazingYellow h-[200px] md:h-[310px] rounded-lg 
      overflow-hidden mb-5 shadow-md transition-all duration-300 ease-in-out group
      focus:outline-none focus:ring-2 focus:ring-blazingRed focus:rounded-md 
      `}
      tabIndex={0}
      role="button"
      aria-label={`View Activity details: ${title}`}
    >
      {/* Render the image using the `Image` component */}
      <picture>
        <Image
          src={image}
          alt={`${title.replace(/\s+/g, "-")}-bg-image`}
          layout="fill"
          objectFit="cover"
          objectPosition={backgroundPosition}
          quality={100}
          aria-label={`Activity: ${title}`}
        />

        <source srcSet={fallBackImage} type="image/jpeg" />
      </picture>

      {/* Create a dark hover effect using absolute divs */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Render the card title on top of the image */}
      <div className="absolute p-5 h-full w-full flex justify-center items-center z-10">
        <h3 className="font-montserrat font-bold text-white text-center text-2xl sm-md:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
};
export default ActivityCard;
