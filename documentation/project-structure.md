# File and Folder Organization

This document outlines the file and folder structure for the React project, promoting maintainability, scalability, and efficient development workflows.

## Directories:

## .github (folder): (Optional)

The .github/workflows directory is a crucial for project's CI/CD pipeline. It houses the main YAML file that define automated workflows to streamline development, testing, and deployment processes.

```
.github/
├── workflows/
│   └── main.yml
├── app/
```

## app (folder):

The core of the application resides here. Components, containers, apis, routing logic, and other business-specific code typically reside within this directory.

```
app/
├── api/
├── components/
│   ├── common/
│   ├── Home/
│   ├── Layout/
│   ├── utils/
│   │   └── font.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
```

### app/api (folder):

This folder is responsible for fetching data from external APIs. Currently, it fetches information related to movies and actors from The Movie Database (TMDB) API. The design allows for future expansion to include data retrieval from various other sources.

#### Folder Structure

```
├── app/
│   ├── api/
│   │   └── movies-actors.ts
```

Inside this folder, you will find a `route.ts` file. This file is where you can export functions for handling HTTP requests, such as `GET`, `POST`, and `PUT`.

#### Example URI

When you define these functions, they generate URIs like the following:

http://localhost:3000/api/movies-actors?filter=movies&page=1

#### Corresponding API Request

The actual `GET` request made to the TMDB API is structured as follows

https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1

In this case, `movies-actors` is the name of the folder where `route.ts` is defined.

#### Security Considerations

One of the key benefits of this setup is that it abstracts and obscures sensitive server variables, such as API keys. Since the data fetching occurs on the server side, it helps to prevent exposure of these keys, enhancing overall security for your application.

#### Future Enhancements

This module can be extended to accommodate additional data sources, allowing for more versatile data fetching capabilities in your application.

### app/components (folder):

This folder houses all of the components used throughout the application. It is organized into three main subfolders:

#### Common

The **common** folder contains reusable components that can be used anywhere in the application. This includes items such as:

- AnchorSection.tsx: This component handles the creation of anchor sections with titles, descriptions, and genral layout.
- FooterLink.tsx: This component could be used to render individual links in the footer of your application.
- Modal.tsx: This component would provide a modal dialog for displaying content or capturing user input.
- SkeletonLoader.tsx: This component can be used to display loading indicators while data is being fetched.

```
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnchorSection.tsx
│   │   │   ├── FooterLink.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── SkeletonLoader.tsx
```

These components are designed for flexibility and consistency, ensuring that they can be utilized across different parts of the app without redundancy.

#### Home

The **Home** folder is dedicated to components specific to the home page. It contains all elements that make up the landing experience for users, such as:

- Hero: This folder might house components related to the hero section of the home page.
  - index.tsx: The main component for the hero section.
- HolidayActivity: This folder could contain components for displaying holiday activities.
  - ActivityCard.tsx: A component for rendering individual activity cards.
  - index.tsx: The main component for the holiday activity section.
- HowDreamShareWorks: This folder contain components related to explaining how the "Dream Share" feature works.
  - index.tsx: The main component for the "How Dream Share Works" section.
  - StepCard.tsx: A component for displaying individual steps in the process.
- MeetAPartnerForm: This folder could contain components for a form where users can meet partners.
  - index.tsx: The main component for the partner form.
- Partners: This folder might contain components related to displaying partners or profiles.
  - index.tsx: The main component for the partners section.
  - ProfileCard.tsx: A component for rendering individual partner profiles.

This nested structure helps organize components related to specific sections of your home page, making the code more modular and easier to manage.

```
│   │   ├── Home/
│   │   │   ├── Hero/
│   │   │   │   └── index.tsx
│   │   │   ├── HolidayActivity/
│   │   │   │   ├── ActivityCard.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── HowDreamShareWorks/
│   │   │   │   ├── index.tsx
│   │   │   │   └── MovieCard.tsx
│   │   │   │   └── MovieProfile.client.tsx
│   │   │   ├── MeetAPartnerForm/
│   │   │   │   └── index.tsx
│   │   │   └── Partners/
│   │   │       ├── index.tsx
│   │   │       └── PartnerProfile.tsx
│   │   │       └── ProfileCard.tsx
```

#### Layout

The **Layout** folder holds components related to the overall structure of the application, specifically the header and footer navigations. This separation is intentional to ensure that layout components are distinct from other reusable components, making it easier to manage and maintain the app's overall structure.

```
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
```

#### Utils

This folder houses utility functions that can be reused across different parts of your project.At the moment it has:

- font.ts that contains functions or configurations related to fonts used in the application. It handles font loading, font family definitions, or other font-related tasks.

```
│   ├── utils/
│   │   └── font.ts
```

## Files

│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ ├── robots.ts
│ └── sitemap.ts

#### favicon.ico

The favicon for the web application.

#### globals.css

A global CSS file for styling elements that are used throughout the application.

#### layout.tsx

This file defines the overall layout or structure of the application, possibly including navigation, header, footer, and other common elements.

#### page.tsx

This file is the main entry point of the application. To create a new page create a folder with the name of the route. The folder name will correspond to the route URL.
For example, if you want to create a route for /about, create an app/about/ folder.Inside the newly created folder, add a page.tsx file. This file will be rendered when the user navigates to the corresponding route. In the page.tsx file, export a function as the default component that returns the JSX for the page. You can dynamically display the route name if you wish

```
export default function Page() {
  return <h1>{route}</h1>
}
```

#### robots.ts

This file probably handles configuration related to web crawlers like Googlebot, specifying which parts of your website should or should not be indexed.

#### sitemap.ts

This file generates a sitemap, which helps search engines understand the structure and content of your website.

## public(folder):

This folder contains all static assets, such as images and fonts, used by the application. Currently, it only includes an images folder.

### public/images (folder):

The images folder is organized into subfolders, each representing different sections or components of the application. These subfolders help maintain structure and keep assets relevant to their respective components.

```
├── public/
│   └── images/
|       |
|       ├── home/
│       |    ├── activities/
│       |    │   └── ...
│       |    │   └── ...
│       |    ├── hero/
│       |    │   └── ...
│       |    ├── HowDreamShareWorks/
│       |    │   └── ...
│       |    └── partners/
│       |    └── ...
|       ├── layout/
│       |    ├── footer/
```

## Root files

This include:

### .eslintignore

Specifies files and directories that should be ignored by ESLint during linting, helping to avoid unnecessary checks on generated or external files.

### .eslintrc.json

The configuration file for ESLint, defining rules, environments, and settings to enforce consistent code quality and style throughout the project.

### .gitignore

Specifies which files and directories Git should ignore. These are usually files that are generated automatically (e.g., build files, node_modules) and don't need to be committed to version control.

### README.md

A markdown file providing an overview of the project, including instructions for installation, usage, and other relevant documentation.

### eslint.config.mjs (Optional)

An alternative configuration file for ESLint using ES modules (with .mjs extension). It allows configuring ESLint with modern JavaScript module syntax.

### next.config.mjs (or next.config.js)

The configuration file for Next.js, defining custom build configurations, routing, environment variables, and other project-specific settings.

### package-lock.json

A lock file generated by npm that captures the exact versions of dependencies installed in the project, ensuring consistent installs across different environments.

### package.json

A manifest file for the project, containing metadata like the project name, version, scripts, dependencies, and other configurations for npm packages.

### postcss.config.mjs (Optional)

Configuration for PostCSS, a tool used for transforming CSS with JavaScript plugins. This file defines PostCSS plugins used for tasks like autoprefixing or minification.

### prettierrc.json

Configuration file for Prettier, defining rules for code formatting such as line length, indentation, and single or double quotes to ensure consistent code styling.

### tailwind.config.ts (or tailwind.config.js) (Optional)

Configuration for Tailwind CSS. It defines custom styles, themes, and plugins used throughout the project. This file allows for customization of the Tailwind utility classes.

### tsconfig.json

The configuration file for TypeScript, defining compiler options and settings like paths, strictness, and module resolution for the TypeScript compiler.

# Overrall Project Structure

```
.github/
├── workflows/
│   └── main.yml
├── app/
│   ├── api/
│   │   └── movies-actors.ts
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnchorSection.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── SkeletonLoader.tsx
│   │   ├── Home/
│   │   │   ├── Hero/
│   │   │   │   └── index.tsx
│   │   │   ├── HolidayActivity/
│   │   │   │   ├── ActivityCard.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── HowDreamShareWorks/
│   │   │   │   ├── index.tsx
│   │   │   │   └── MovieCard.tsx
│   │   │   │   └── MovieProfile.client.tsx
│   │   │   ├── MeetAPartnerForm/
│   │   │   │   └── index.tsx
│   │   │   └── Partners/
│   │   │       ├── index.tsx
│   │   │       └── PartnerProfile.tsx
│   │   │       └── ProfileCard.tsx
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   │       └── FooterLink.tsx
│   ├── utils/
│   │   └── font.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts

├── common/
│   ├── accessibility.md
│   ├── project-structure.md
│   ├─  seo.md
│   ├── setup.md
│   ├─  desktop.jpg
│   ├─  mobile.jpg
├── public/
│   └── images/
|       |
|       ├── home/
│       |    ├── activities/
│       |    │   └── ...
│       |    │   └── ...
│       |    ├── hero/
│       |    │   └── ...
│       |    ├── HowDreamShareWorks/
│       |    │   └── ...
│       |    └── partners/
│       |    └── ...
|       ├── layout/
│       |    ├── footer/
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── README.md
├── eslint.config.mjs (Optional)
├── next.config.mjs (or next.config.js)
├── package-lock.json
├── package.json
├── postcss.config.mjs (Optional)
├── prettierrc.json
├── tailwind.config.ts (or tailwind.config.js) (Optional)
└── tsconfig.json
```
