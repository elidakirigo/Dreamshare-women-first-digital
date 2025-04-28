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

3. Create an .env.local file to and create two variable namely(You may need to create a TMDB account if you dont have one already):

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
