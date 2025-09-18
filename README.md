# ExpenseTracker AI

ExpenseTracker AI is a modern, AI-powered expense tracking application that helps you manage your finances smartly. It leverages OpenAI and OpenRouter for intelligent insights, smart categorization, and personalized financial recommendations.

## Features

- **AI-Powered Insights:** Get actionable financial insights based on your spending patterns.
- **Automatic Categorization:** Expenses are categorized automatically using AI.
- **Smart Recommendations:** Receive tips and suggestions to save money and improve your financial habits.
- **Modern UI:** Clean, responsive interface built with Next.js and Tailwind CSS.
- **Authentication:** Secure sign-in and user management with Clerk.
- **Dark Mode:** Seamless light/dark theme switching.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (with PostgreSQL or SQLite)
- **OpenAI / OpenRouter API**
- **Clerk** (Authentication)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root directory and add the following:

```
DATABASE_URL="your_database_connection_string"
OPENAI_API_KEY="your_openai_api_key"
OPENROUTER_API_KEY="your_openrouter_api_key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

**Note:** Replace the placeholder values with your actual API keys and database URL. Never commit your `.env.local` file to version control.

### 3. Set up the database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Add, edit, and delete expenses.
- View AI-generated insights and recommendations.
- Use the search and filter features to analyze your spending.
- Switch between light and dark mode.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

