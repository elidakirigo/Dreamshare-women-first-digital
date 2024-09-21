# DreamShare [![WFD Cypress Tests](https://github.com/elidakirigo/Dreamshare-women-first-digital/actions/workflows/Cypress.yml/badge.svg?event=push)](https://github.com/elidakirigo/Dreamshare-women-first-digital/actions/workflows/Cypress.yml)

DreamShare is a dynamic and responsive web application designed to enhance travel experiences by connecting users with popular movies and celebrities. Built with Next.js, Tailwind CSS, and other modern tools, it offers seamless integration with third-party APIs to fetch live data and ensure optimal performance across devices.

## Features

- **Next.js + Typescript**: Utilized for server-side rendering and optimized SEO performance.
- **Shadcn-UI (Radix-UI)**: Provides accessible and customizable UI components.
- **Tailwind CSS**: Enables responsive design with utility-first CSS for quick layout development.
- **Axios**: Efficiently fetches live data from third-party APIs.
- **NextAuth & Google Cloud Authentication**: Secure user authentication using Google.
- **Cypress**: End-to-end testing for maintaining a bug-free application.
- **ESLint + Prettier**: Ensures clean, consistent, and maintainable code.
- **CI/CD integration**: Unit, integration, and end-to-end Cypress tests are executed.

## API Integrations

- **The Movie Database (TMDB)**: Fetches "Most Popular Movies" for the "How Dreamshare Works?" section.
- **User Profile API**: Displays "Most Popular Celebrities" in the "Meet a Partner for Your Best Holiday" section.
- **Load More Functionality**: Fetches additional movies or celebrities dynamically with a "Load More" button.
- **Modal Interaction**: "See Other Partners" opens a modal to display other celebrity profiles.

### Google Analytics Setup

Google Analytics is integrated via Google Tag Manager, which tracks key events such as:

- Page views: Monitors which pages are visited and how frequently.
- Clicks and interactions: Tracks clicks on key elements, like buttons or links.
- Form submissions: Captures user interactions with forms (e.g., signups or searches).
- Modal views: Tracks when the "See Other Partners" modal is opened.

## Installation

### Prerequisites

- Node.js and npm
- Google Cloud API key (for authentication)
- TMDB API key (for fetching movie data)

### 1. Clone the Repository

```bash
git clone https://github.com/elidakirigo/Dreamshare-women-first-digital.git
cd Dreamshare-women-first-digital
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Copy the example environment file and set up your environment variables.

```bash
cp .env.example .env
```

Edit the `.env` file to include API keys and authentication credentials.

```bash
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_TMDB_API_KEY=your-tmdb-api-key
```

### 4. Run the Application

Local development:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run dev
```

## Testing

Run Cypress tests to ensure the application is functioning as expected:

```bash
npm run test
```

## Deployment

The application is deployed using service **Vercel**.

1. Push your repository to GitHub.
2. Connect your GitHub repository to your chosen deployment service.
3. Set environment variables for the deployment (API keys, secrets).
4. Deploy the application.

## Performance Optimization

Run Lighthouse or PageSpeed Insights and follow the recommendations to improve the performance, accessibility, and SEO scores. Include the results in your documentation.

**final score** - https://pagespeed.web.dev/analysis/https-dreamshare-women-first-digital-vercel-app/jkl0euxxoy?form_factor=mobile

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or issues, please reach out to [elidakirigo@gmail.com](mailto:elidakirigo@gmail.com).
