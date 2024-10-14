# Technical Challenge Round

Implementation of a responsive, seo friendly website.

## Project Overview
This application is statically generated and uses Incremental Static Regeneration (ISR) to fetch data. ISR was a key factor in choosing Next.js over Gatsby, as it allows pages to be statically generated and updated in the background when new data is available, without requiring a complete site rebuild. For example, I’ve set the movies and actors API to revalidate and refetch data every 24 hours, ensuring the trending movies list is refreshed daily.

Currently, I am working with limited data, fetching only the first page of the movies API. However, if I were to fully leverage the API and retrieve all available data, Server-Side Rendering (SSR) would be a better choice due to the API structure. Fetching multiple pages, such as up to page 100, would require generating all these pages statically during the build process, leading to long build times and increased deployment overhead.

## Why choose Next Js over Gatsby js ?

1. I chose Next.js over Gatsby for its flexibility to scale, combining Static Site Generation (SSG), Server-Side Rendering (SSR), and dynamic content effectively. While Gatsby supports SSR, it's not its primary focus.

2. Next.js features Incremental Static Regeneration, allowing pages to be updated in the background without rebuilding the entire site, while Gatsby requires a complete rebuild, which can be slow for larger sites.

3. Data fetching in Next.js is simpler, while Gatsby relies on a GraphQL layer.

4. Next.js has a larger and more diverse ecosystem built on React, whereas Gatsby focuses mainly on static sites, often leading to TypeScript errors with various packages.

5. Next.js includes built-in API routes for server-side logic like form submissions and authentication, while Gatsby lacks native API route support.

6. While both Gatsby and Next.js offer optimized image features—Gatsby with `<GatsbyImage>` and `<StaticImage>`, and Next.js with the `<Image>` component—it's generally easier to work with images in Next.js since there’s no need to use GraphQL to fetch them.

7. Next.js offers more flexible integration of third-party libraries, databases, and APIs, while Gatsby.js provides built-in plugins that can be limiting for custom or complex functionality.

## Project Features

- **Next.js:** Utilizes a powerful React framework for building dynamic and performant web applications with support for both static and server-side rendering.

- **Tailwind CSS:** Implements a utility-first CSS framework for rapid UI development, allowing for customizable and responsive designs.

- **TypeScript Support:** Provides strong typing and enhanced tooling for JavaScript, improving code quality and maintainability while reducing runtime errors through compile-time checks.

- **TMDB Movie API:** Integrates with The Movie Database API to fetch and display trending movies and actor information dynamically.

- **Incremental Static Regeneration (ISR):** Ensures that pages are updated in the background as new data becomes available without needing a full site rebuild.

- **Google Analytics:** Tracks user interactions and provides insights into site performance and visitor behavior for data-driven decisions.

- **Built-in API Routes:** Simplifies the creation and management of backend functionality within the application.

- **Optimized Image Handling:** Uses Next.js's <Image> component for automatic image optimization and responsive loading, enhancing performance.

- **SEO Optimization:** Implements best practices for search engine optimization, including meta tags and semantic HTML structure.

- **Responsive Design:** Ensures a seamless user experience across various devices and screen sizes, enhancing accessibility.

- **CI/CD Deployment:** Implements Continuous Integration and Continuous Deployment processes to automate testing and deployment, ensuring quick and reliable updates to the application with minimal manual intervention.

## Getting Started

To get this project up and running on your local machine, follow these steps:

1. ### Installation Instructions

First, ensure you have Node.js installed. If it's not installed, you can install the latest version using the following command:

```bash
# For macOS and Linux (using Homebrew)
brew install node

# For Windows (using Chocolatey)
choco install nodejs

# Alternatively, download and install from the official Node.js website:
https://nodejs.org/

```

2. Clone the repository:

```bash
# Via Ssh
git clone git@github.com:kariukisamuel/nextjs-technical-test.git
# Via Git Cli
gh repo clone kariukisamuel/nextjs-technical-test
# Via Https
https://github.com/kariukisamuel/nextjs-technical-test.git

```

2. Install the project dependencies by running one of the following commands:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create an .env.local file to and create three variable namely(You may need to create a TMDB account if you dont have one already):

```
TMDB_API_URL=https://api.themoviedb.org/3/
TMDB_API_SECRET_KEY={replace_with_your_key}
NEXT_PUBLIC_API_BASE_URL={replace_with_your_website_domain}
```

4. After setting up spin up the development server

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Documentation

You can find detailed the documentation on this links:

1. [Getting Started](documentation/setup.md) 
2. [Project Structure](documentation/project-structure.md)
3. [Seo](documentation/seo.md)
4. [Accessibility](documentation/accessibility.md)

However, please read on for an overview before diving deeper into the documentation.

## Approach to addressing the key metrics for the website.

### 1. Responsive Design on Cross-Browser/Device Compatibility

From the Figma design provided we have 3 major screen sizes:

- Mobile (320px)
- Tablet (768px)
- Desktop (1200px)

The developed design is fully responsive and corresponds to the break points with an added responsive breakpoint of 600px(small tablet devices) - 768px (Large tablets) below 600px widths are treated as normal mobile devices and respond uniformly across small devices.

This are my Tailwind breakpoints:

```
    screens: {
      xs: "320px", // Extra small screens
      sm: "480px", // Small screens like mobile devices
      md: "768px", // Medium screens like tablets
      lg: "976px", // Large screens like small laptops
      xl: "1440px", // Extra large screens like desktops
      "sm-md": { min: "600px", max: "768px" }, // Custom range for 600px to 768px tablets
    },
```

#### Cross Browser & Devices Test Results

Did tests on devices listed in the dev tools simulator. The app was responsive and compatible across many devices.

Using Sauce Labs, I was able to test the web application on the following platforms:

| Android Version | Platform                   | Pass | Fail |
| --------------- | -------------------------- | ---- | ---- |
| 15              | Android                    | -    |      |
| 13              | Android                    | -    |      |
| 12              | Android                    | -    |      |
| 11              | Android                    | -    |      |
| 10              | Android                    | -    |      |
| 9               | Android                    | -    |      |
| 8               | Android                    | -    |      |
| 7.1             | Android                    |      | x    |
| 7.0             | Android                    |      | x    |
| 6.0             | Android                    |      | x    |
| 5.1             | Android GoogleAPI Emulator |      | x    |



### 2. HTML/SEO Semantic Structure

The website leverages semantic HTML to enhance both accessibility and SEO. Semantic tags provide structure and meaning to the content, allowing screen readers and search engines to understand the webpage more effectively. Below is the semantic structure used for the homepage:

#### HTML structure

```
<html lang="en">
    <head>
        <!-- Meta tags, title, and other head content -->
    </head>
    <body>
        <header aria-label="Main Navigation">
            <!-- Navigation bar or primary header content -->
        </header>

        <main>
            <!-- Hero section introducing the website -->
            <section id="hero" aria-labelledby="hero-heading">
                <h1 id="hero-heading">.....</h1>
            </section>

            <!-- Section explaining how Dreamshare works -->
            <section id="how-dreamshare-works" aria-labelledby="how-dreamshare-works-heading">
                <h2 id="how-dreamshare-works-heading">...</h2>
            </section>

            <!-- Section introducing partners or celebrities -->
            <section id="meet-a-partner" aria-labelledby="partner-heading">
                <h2 id="partner-heading">...</h2>
            </section>

            <!-- Section showcasing holiday activity ideas -->
            <section id="discover-holiday-activity-ideas" aria-labelledby="activities-heading">
                <h2 id="activities-heading">....</h2>
            </section>

            <!-- Section with a form for users to create their own holiday -->
            <section id="create-your-holiday-form" aria-labelledby="create-your-holiday-form-heading">
                <h2 id="form-heading">....</h2>
            </section>
        </main>

        <footer>
        </footer>
    </body>
</html>

```

#### Heading structure

```
| Heading Level | Content                                 |
|---------------|-----------------------------------------|
| **H1**        | Share Your Holiday Dream                |
| **H2**        | How Dreamshare Works?                   |
| **H2**        | Meet a Partner for Your Best Holiday    |
| **H2**        | Discover Holiday Activity Ideas          |
| **H2**        | Create Your Holiday Activity             |
| **H3**        | Sports and Activities                    |
| **H3**        | Wellness and Health                      |
| **H3**        | Extreme Sports and Expeditions           |
| **H3**        | Safari                                   |
| **H3**        | Culture and Education                    |
| **H3**        | Enjoyment and Relaxation                 |
| **H3**        | Travelling                               |
```

Review the detailed steps implemented to enhance the page's SEO. [Read Complete Seo Documentation](documentation/seo.md)

### 3. Codebase Organization, Modularity, and Maintainability

#### Folder Structure and Code Organization

The folder structure has been organized to promote separation of concerns. Here’s how it is structured:

- **Homepage Components**: All components specific to the homepage are located in `app/components/Home`.
- **Common Components**: Reusable components that may be used across different pages can be found in `app/components/Common`.
- **Layout Components**: Components that define the page layout, such as the header and footer, are placed in `app/components/Layout`.
- **Images**: Images are organized in the `public/image/{component}` directory, further separating concerns.

#### Tailwind CSS Usage

The codebase utilizes Tailwind CSS, a utility-first framework. To ensure readability, it’s crucial that classes are consistently arranged. For example, in a team setting where each member handles different features, the code can become cluttered and difficult to manage.

#### Formatting with Prettier

To maintain uniformity, this code is formatted using Prettier. Tailwind classes are organized in the following order:

1. **Layout**
2. **Flexbox**
3. **Grid**
4. **Spacing**
5. **Sizing**
6. **Typography**
7. **Backgrounds**
8. **Borders**
9. **Effects**
10. **Transitions**

By grouping classes in this manner, the code becomes easier to read and maintain. Prettier also formats all files to ensure consistent styling throughout the codebase.

#### Page.tsx (Main Entry Point of the Application)

Page.tsx serves as the main entry point of the application, its the index page. To create another page, follow these steps:

1. **Create a Folder**: Name the folder according to the route you want to create. The folder name will correspond to the route URL.

   - For example, to create a route for `/about`, create a folder at `app/about/`.

2. **Add a Page File**: Inside the newly created folder, add a file named `page.tsx`. This file will be rendered when the user navigates to the corresponding route.

3. **Export the Component**: In the `page.tsx` file, export a function as the default component that returns the JSX for the page. You can also dynamically display the route name if desired.

Following these steps will ensure that new pages are properly integrated into the application.

#### Code Clarity

Every piece of code is commented for clarity

#### Code Management

Code version and history is managed with Github. Scroll to github section.

For in depth details on the Project structure [Read Here](documentation/project-structure.md)

### 4. SEO Meta Tags and Schema Markup

#### Meta Tags and SEO Audit

I have added the following relevant meta tags to enhance SEO:

- Title & Description
- Keywords
- Apple Icons
- Manifest
- Canonical URL
- Open Graph Tags
- Twitter Cards

An audit on Seobility reveals a score of **100%** on meta information. You can view the report on [Seobility](https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fnextjs-tech.vercel.app%2F&crawltype=1#fg-extern), a free SEO site checker.

Additionally, you can check the detailed results for Open Graph tags to ensure they are properly configured. Click [here](https://www.opengraph.xyz/url/https%3A%2F%2Fnextjs-tech.vercel.app%2F) to view the results.

This website also includes a sitemap.xml and robots.txt file

For a full detailed seo report [Click Here](documentation/seo.md)

### 5. Accessibility Standards

This website is enabled for accesibilty. Some of the measures taken include:

- Ensuring color contrast and text size are optimized for readability.
- Add ARIA (Accessible Rich Internet Applications) labels and roles.
- Implement keyboard navigability and screen reader support.

Two tools were used to test accessibility. This are:

1. https://www.accessibilitychecker.org/ find the test result [here](https://www.accessibilitychecker.org/audit/?website=https%3A%2F%2Fnextjs-tech.vercel.app%2F&flag=ww)
2. Accessibility Insights For Chrome. You can download it [here](https://accessibilityinsights.io/downloads/) and run the manual tests.

As a result the website scores very high on accessibility. For a detailed audit report on acccesibility. [Click Here](documentation/accessibility.md)

### 6. Github & Application Deployment

The website is deployed at [https://nextjs-tech.vercel.app/](https://nextjs-tech.vercel.app/)

In GitHub, I chose to use two branches: 
- `staging` 
- `main`. 

While I would typically opt for a separate branch for each feature in a team setting, working on this project alone allowed me to simplify the process with just these two branches, minimizing unnecessary switches. Each GitHub commit includes a title that summarizes the general changes, along with comments that detail specific modifications.

The application is deployed on Vercel, which is also the creator of the Next.js framework. I utilize GitHub Actions to automate the deployment process, resulting in a CI/CD workflow. The application is deployed to two environments: staging and production. When a pull request is made to the `main` branch, the staging environment is updated, while merging the pull request deploys the app to production.

The confidential variables, like `API-KEY`, are stored in GitHub Secrets and Vercel Environment Variables. This setup allows for seamless continuous deployment since the `.env.local` file is not pushed to GitHub.

The workflow file that manages this automation can be found in the `.github/workflows/main.yml` directory.

Here is a sample of the workflow file that defines jobs and events:

```
name: Vercel Deployment

env:
  # Environment variables for Vercel organization and project IDs
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

  # Custom API environment variables
  API_BASE_URL: ${{ secrets.TMDB_API_URL }}
  API_KEY: ${{ secrets.TMDB_API_SECRET_KEY }}
  NEXT_PUBLIC_API_BASE_URL: ${{ secrets.NEXT_PUBLIC_API_BASE_URL }} 

on:
  # Trigger deployment on every push to the 'main' branch
  push:
    branches:
      - main

jobs:
  Deploy-development:
    runs-on: ubuntu-latest # The environment where the job will run

    steps:
      # Step 1: Checkout the latest code from the repository
      - uses: actions/checkout@v2

      # Step 2: Install Node.js using GitHub Actions' setup-node
      - name: Install Node.js
        uses: actions/setup-node@v3

      # Step 3: Set up npm with Node.js version 20 and npm registry
      - name: Install npm
        uses: actions/setup-node@v3
        with:
          node-version: "20" # Specify Node.js version 20
          registry-url: "https://registry.npmjs.org/" # Use npm registry

      # Step 4: Install project dependencies (packages specified in package.json)
      - name: Install dependencies
        run: npm install

      # Step 5: Install Vercel CLI globally to use Vercel commands on the server
      - name: Install Vercel CLI
        run: npm install --global vercel@latest

      # Step 6: Pull environment configuration from Vercel (using the Vercel token for authentication)
      # Note: Secrets like VERCEL_TOKEN should be set in GitHub repo settings > Secrets and Variables > Actions
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=development --token=${{ secrets.VERCEL_TOKEN }}

      # Step 7: Build the project artifacts for production
      # This generates a production build that Vercel will use to deploy
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      # Step 8: Deploy the prebuilt artifacts to Vercel
      # The --prebuilt flag is used to deploy an already built project
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}

```

### 6. Google Tag Manager & Google Analytics

This site utilizes Google Analytics, with the tracking code encapsulated in a GoogleAnalytics component that is imported into layout.tsx.It track visits to the homepage.

Here is the code for the `GoogleAnalytics` component:

```
"use client";
import React from 'react'
// Google Analytic Logic
import { useEffect } from 'react';
import Script from 'next/script'; // Correct import for Script
import { usePathname } from 'next/navigation'; // Use usePathname to track page changes

const GoogleAnalytics = () => {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Log the initial page view
    window.gtag('config', 'G-4CF355VYVN', {
      page_path: pathname,
    });
  }, [pathname]); // Run effect when pathname changes
  return (
    <div>
      {/* Google Analytics Setup */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-4CF355VYVN`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4CF355VYVN', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
    </div>
  )
}

export default GoogleAnalytics


```

It track visits to the homepage.

### 8. Page Speed Insights or Lighthouse Report

The app performs well in pagespeed insight with some room for improvement. Key metrics are as follows:

**1. Mobile**
| Metric                      | Value  |
|-----------------------------|--------|
| First Contentful Paint      | 1.0 s  |
| Largest Contentful Paint    | 2.8 s  |
| Total Blocking Time         | 170 ms |
| Cumulative Layout Shift     | 0      |
| Speed Index                 | 1.2 s  |

**2. Desktop**
| Metric                      | Value  |
|-----------------------------|--------|
| First Contentful Paint      | 0.3 s  |
| Largest Contentful Paint    | 0.6 s  |
| Total Blocking Time         |   0 ms |
| Cumulative Layout Shift     |   0 s  |
| Speed Index                 | 0.6 s  |

On all metrics the website performs well except LCP.A deep dive into LCP metrics is as follows:

**1. Mobile**
| Phase         | % of LCP | Timing   |
|---------------|----------|----------|
| TTFB          | 21%      | 600 ms   |
| Load Delay    | 24%       | 200 ms   |
| Load Time     | 38%      | 1,390 ms |
| Render Delay  | 17%      | 1,110 ms |

**2. Desktop**
| Phase         | % of LCP | Timing   |
|---------------|----------|----------|
| TTFB          | N/A      | N/A      |
| Load Delay    | N/A      | N/A      |
| Load Time     | N/A      | N/A      |
| Render Delay  | N/A      | N/A      |


Kindly check the summary results below:

Mobile:

![Mobile Results Image](https://github.com/kariukisamuel/nextjs-technical-test/blob/staging/documentation/mobile-1.jpg)

![Mobile Results Image](https://github.com/kariukisamuel/nextjs-technical-test/blob/staging/documentation/mobile-2.jpg)

Desktop:

![Desktop Results Image](https://github.com/kariukisamuel/nextjs-technical-test/raw/staging/documentation/desktop-1.jpg)

![Desktop Results Image](https://github.com/kariukisamuel/nextjs-technical-test/raw/staging/documentation/desktop-2.jpg)


You can also test via this link https://pagespeed.web.dev/analysis/https-nextjs-tech-vercel-app/hvqjnsegux?form_factor=mobile

### 8. What can be improved? 

A good LCP is below  2.5 seconds, for this application it stands at 3.3 seconds. This are the measures i would undertake to improve performance:

1. Use a CDN to deliver static assets such as the background image from a Content Delivery Network (CDN) to reduce latency and load times.
2.  Keep tweaking server configurations for optimal performance or shift to a faster web server