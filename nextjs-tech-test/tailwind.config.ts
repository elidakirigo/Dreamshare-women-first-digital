// Import the 'Config' type from Tailwind CSS for type safety
import type { Config } from "tailwindcss";

// Define the Tailwind CSS configuration object with type annotations
const config: Config = {
  // Specify the files Tailwind should scan for class names to generate styles
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the 'pages' directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the 'components' directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the 'app' directory (for Next.js app directory structure)
  ],

  // Customize the default theme
  theme: {
    // Define custom screen breakpoints for responsive design
    screens: {
      xs: "320px", // Extra small screens
      sm: "480px", // Small screens like mobile devices
      md: "768px", // Medium screens like tablets
      lg: "976px", // Large screens like small laptops
      xl: "1440px", // Extra large screens like desktops
      "sm-md": { min: "600px", max: "768px" }, // Custom range for 600px to 768px
    },

    // Extend the default theme with custom settings
    extend: {
      // Add custom font families using CSS variables
      fontFamily: {
        montserrat: ["var(--font-montserrat)"], // Custom Montserrat font
        roboto: ["var(--font-roboto)"], // Custom Roboto font
      },

      // Add custom colors to the theme
      colors: {
        blazingRed: "#E4004A", // A custom red color
        lightAlmond: "#F7F3F2", // A light almond color
        blazingYellow: "#F9D423", // A bright yellow color
      },
    },
  },

  // No plugins are used, but this is where they can be added
  plugins: [],
};

// Export the configuration to be used by Tailwind CSS
export default config;
