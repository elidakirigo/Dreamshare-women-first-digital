// Import the Montserrat and Roboto fonts from `next/font/google`
import { Montserrat, Roboto } from "next/font/google";

// Initialize the Montserrat font with specified variables, weights, and subsets
export const montserrat_init = Montserrat({
  variable: "--font-montserrat", // Set the CSS variable name for the font
  weight: ["400", "700"], // Specify the font weights to load
  subsets: ["latin"], // Specify the character subsets to include
  display: 'swap', // ensures better loading behavior
});

// Initialize the Roboto font with specified variables, weights, and subsets
export const roboto_init = Roboto({
  variable: "--font-roboto", // Set the CSS variable name for the font
  weight: "300", // Specify the font weight to load
  subsets: ["latin"], // Specify the character subsets to include
  display: 'swap', // ensures better loading behavior
});

// Export the CSS variables for the fonts
export const montserrat = montserrat_init.variable;
export const roboto = roboto_init.variable;
