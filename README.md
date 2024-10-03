<a name="readme-top"></a>

# Track your income and expenses with Finance.

![Track your income and expenses with Finance.](/.github/images/img1.png "Track your income and expenses with Finance.")


<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect url
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# neon db url
DATABASE_URL=postgresql://<username>:<password>@<hostname>/<database>?sslmode=require

# app base url
NEXT_PUBLIC_APP_URL=http://localhost:3000

```

5. Obtain Clerk Authentication Keys

   1. **Source**: Clerk Dashboard or Settings Page
   2. **Procedure**:
      - Log in to your Clerk account.
      - Navigate to the dashboard or settings page.
      - Look for the section related to authentication keys.
      - Copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` provided in that section.

6. Retrieve Neon Database URI

   1. **Source**: Database Provider (e.g., Neon, PostgreSQL)
   2. **Procedure**:
      - Access your database provider's platform or configuration.
      - Locate the database connection details.
      - Replace `<username>`, `<password>`, `<hostname>`, and `<database>` placeholders in the URI with your actual database credentials.
      - Ensure to include `?sslmode=require` at the end of the URI for SSL mode requirement.

7. Specify Public App URL

   1. **Procedure**:
      - Replace `http://localhost:3000` with the URL of your deployed application.

8. Save and Secure:

   - Save the changes to the `.env.local` file.

9. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

10. Migrate database:

In terminal, run `npm run db:generate` to generate database client and `npm run db:migrate` to make sure that your database is up-to-date along with schema.

11. Run the Seed Script:

In the same terminal, run the following command to execute the seed script:

```bash
npm run db:seed
```

This command uses `npm` to execute the Typescript file (`scripts/seed.ts`) and writes transaction data in database.

12. Verify Data in Database:

Once the script completes, check your database to ensure that the transaction data has been successfully seeded.

13. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshot.


![Modern UI/UX](/.github/images/img2.png "Modern UI/UX")

![Transactions](/.github/images/img3.png "Transactions")

![Accounts](/.github/images/img4.png "Accounts")

Features:

📊 Interactive financial dashboard

🔁 Changeable chart types

🗓 Account and date filters

💹 Detailed transactions table

➕ Form to add transactions

🧩 Customizable select components

💵 Income and expense toggle

🔄 CSV transaction imports

🔥 API via **Hono.js**

🪝 State management via **Tanstack React Query**

🔐 Authentication via **Clerk (Core 2)**

🗑 Bulk delete and search in transactions

👤 User settings customization

🌐 Built with **Next.js 14**

🎨 Styled with **TailwindCSS** and **Shadcn UI**

💾 PostgreSQL & **Drizzle ORM**
🚀 Deployed on **Vercel**



