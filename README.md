
# Todo Application

A full-stack Todo Application built using **Next.js**, **NextAuth.js**, **Prisma ORM**, and **PostgreSQL**. Users can register and log in, manage tasks (add, edit, delete), and view tasks on a dashboard.
## Technologies Used

- **Frontend:**
  - Next.js (React Framework)
  - TailwindCSS (Styling)
  - NextAuth.js (Authentication)
  
- **Backend:**
  - Prisma ORM (Database management)
  - PostgreSQL (Database)

## Features

- **User Authentication:**
  - Users can register or log in via **NextAuth.js**.
  - Secure handling of user data and authentication state.

- **Task Management:**
  - Add new tasks.
  - View and manage tasks with options to **edit** or **delete** them.
  - Real-time updates without page refresh after adding, editing, or deleting tasks.

- **Dashboard:**
  - Displays a list of tasks after login.
  - Each task has an option to edit or delete.
  - Tasks are stored in a **PostgreSQL** database via **Prisma ORM**.

- **Edit Page:**
  - Clicking the edit icon redirects the user to an edit page.
  - The task name is displayed in an input field for editing.
  - Updates are reflected in the database and the dashboard.


## Getting Started

### Prerequisites

1. **Node.js** (v14 or higher)  
2. **PostgreSQL** database (you can use a local setup or cloud-based solutions like Heroku, AWS, etc.)

### Setup Instructions

1. Clone this repository to your local machine:

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the PostgreSQL database and create the `.env` file in the root of the project with the following variables:

    ```env
    DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/todo_app
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-nextauth-secret
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    ```

    - Replace `yourpassword`, `your-nextauth-secret`, `your-google-client-id`, and `your-google-client-secret` with your own credentials.
    - The `DATABASE_URL` is the connection string for your PostgreSQL database. Adjust it as necessary.

4. Set up the Prisma database schema:

    ```bash
    npx prisma migrate dev --name init
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and visit `http://localhost:3000` to access the Todo Application.

### Environment Variables

- **`DATABASE_URL`**: Connection string for the PostgreSQL database.
- **`NEXTAUTH_URL`**: URL where your application is hosted (for local development, use `http://localhost:3000`).
- **`NEXTAUTH_SECRET`**: Secret key for NextAuth.js (used for encrypting session data).
- **`GOOGLE_CLIENT_ID`**: Your Google OAuth Client ID.
- **`GOOGLE_CLIENT_SECRET`**: Your Google OAuth Client Secret.

