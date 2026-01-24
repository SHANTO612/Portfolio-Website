# Portfolio Website

A dynamic, fully responsive personal portfolio website built with Next.js 16, Tailwind CSS, and MongoDB. This project features a modern UI with an interactive terminal, an admin panel for content management, and smooth animations using Framer Motion.

## 🚀 Features

-   **Dynamic Content**: All data (About, Projects, Experience, Education, etc.) is fetched dynamically from MongoDB.
-   **Admin Dashboard**: Secure admin panel to Add, Update, and Delete portfolio content.
-   **Interactive Terminal**: A unique, floating terminal component that allows users to explore the portfolio using command-line style inputs (accessible globally).
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices using Tailwind CSS.
-   **Animations**: Smooth page transitions and element animations powered by Framer Motion.
-   **Server Components**: Utilizes Next.js 16 Server Components for improved performance and SEO.
-   **Direct Database Access**: Optimized data fetching with direct Mongoose queries in Server Components to avoid Vercel deployment issues (API route loopbacks).

## 🛠 Tech Stack

-   **Frontend**: Next.js 16 (App Router), React 18, Tailwind CSS, Material UI, Framer Motion
-   **Backend**: Next.js API Routes (Serverless functions)
-   **Database**: MongoDB (via Mongoose ODM)
-   **Authentication**: Custom implementation (using bcryptjs)
-   **Deployment**: Vercel

## 📂 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages and API routes
│   │   ├── admin/           # Admin dashboard pages
│   │   ├── api/             # Backend API endpoints (CRUD operations)
│   │   ├── layout.js        # Root layout (includes Global Terminal)
│   │   └── page.js          # Home page
│   ├── components/          # Reusable React components
│   │   ├── admin-view/      # Components for the Admin interface
│   │   ├── client-view/     # Components for the Public interface
│   │   │   ├── terminal/    # Interactive Terminal component
│   │   │   └── ...
│   ├── database/            # Database connection logic
│   ├── models/              # Mongoose data models
│   └── services/            # Service functions
├── public/                  # Static assets (images, icons)
├── .env                     # Environment variables
└── package.json             # Dependencies and scripts
```

## ⚙️ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   MongoDB Atlas account (or local MongoDB instance)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/SHANTO612/Portfolio-Website.git
    cd Portfolio-Website
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Set up Environment Variables:
    Create a `.env` file in the root directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🖥️ Terminal Commands

The website features a global floating terminal button. Click it to open the terminal and try these commands:

-   `help`: List all available commands
-   `about`: Display information about me
-   `skills`: List technical skills
-   `projects`: List projects (fetched from DB)
-   `achievements`: List achievements
-   `certifications`: List certifications
-   `contact`: Show contact details
-   `clear`: Clear the terminal screen

## 📦 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the `MONGODB_URI` environment variable in the Vercel project settings.
4.  Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
