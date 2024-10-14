import React from "react";

// Define the type of props for the SkeletonLoader component
type SkeletonLoaderProps = {
  // Optional boolean property to indicate if the loader should be circular
  circular?: boolean;
  // Optional string property to set the width of the loader
  width?: string;
  // Optional string property to set the height of the loader
  height?: string;
};

// Create a functional component named `SkeletonLoader`
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  // Set the default value for `circular` to false
  circular = false,
  // Set the default value for `width` to "w-full" (full width)
  width = "w-full",
  // Set the default value for `height` to "h-6" (6 units height)
  height = "h-6",
}) => {
  // Determine the shape class based on the `circular` property
  const shapeClass = circular ? "rounded-full" : "rounded";

  // Return the JSX structure for rendering the skeleton loader
  return (
    <div
      // Combine the width, height, and shape classes into a single className
      className={`${width} ${height} bg-gradient-to-tr from-blazingRed to-blazingYellow skeleton ${shapeClass}`}
    ></div>
  );
};
// Export the `SkeletonLoader` component for use in other parts of the application

export default SkeletonLoader;
