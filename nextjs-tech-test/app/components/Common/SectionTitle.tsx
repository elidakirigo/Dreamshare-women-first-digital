import React from "react";
// Define the type of the `title` prop
type title = {
  title: string;
};
// Create a functional component named `SectionTitle`
const SectionTitle = ({ title }: title) => {
  return (
    <div>
      <h2 className="text-center text-gray-700 text-2xl font-montserrat font-bold">
        {title}
      </h2>
    </div>
  );
};
// Export the `SectionTitle` component for use in other parts of the application

export default SectionTitle;
