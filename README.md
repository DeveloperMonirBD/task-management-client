# Task Management Application

**A task management application with real-time synchronization, Firebase authentication, and a clean, responsive UI.**

## Live Link
[Live Application](https://task-management-client-e78f5.web.app)

## Short Description
This is a task management application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. The app uses Firebase Authentication for user login and MongoDB for task persistence, ensuring real-time updates and data integrity.

## Key Features
- **Authentication:**
  - Google Sign-In via Firebase Authentication.
  - Stores user details (User ID, email, and display name) upon first login.
  
- **Task Management:**
  - Add, edit, delete, and reorder tasks.
  - Tasks are categorized into To-Do, In Progress, and Done.
  - Drag-and-drop functionality to move tasks between categories.
  - Real-time updates to the database.

- **Database & Persistence:**
  - Uses MongoDB (via Express.js server) to store tasks.
  - Ensures tasks are updated in real-time.

- **Frontend UI:**
  - Built with Vite.js + React.
  - Uses `react-beautiful-dnd` for drag-and-drop functionality.
  - Clean, minimalistic, and fully responsive design.

- **Responsiveness:**
  - Smooth user experience on both desktop and mobile devices.

## Dependencies
- **Main Dependencies:**
  - axios: ^1.7.9
  - firebase: ^11.3.1
  - flowbite-react: ^0.10.2
  - framer-motion: ^11.11.17
  - localforage: ^1.10.0
  - match-sorter: ^7.0.0
  - react: ^18.3.1
  - react-beautiful-dnd: ^13.1.1
  - react-dom: ^18.3.1
  - react-hot-toast: ^2.4.1
  - react-icons: ^5.3.0
  - react-router-dom: ^6.27.0
  - sort-by: ^1.2.0
  - sweetalert2: ^11.17.2

- **Development Dependencies:**
  - @eslint/js: ^9.13.0
  - @types/react: ^18.3.12
  - @types/react-dom: ^18.3.1
  - @vitejs/plugin-react: ^4.3.3
  - autoprefixer: ^10.4.20
  - daisyui: ^4.12.14
  - eslint: ^9.13.0
  - eslint-plugin-react: ^7.37.2
  - eslint-plugin-react-hooks: ^5.0.0
  - eslint-plugin-react-refresh: ^0.4.14
  - globals: ^15.11.0
  - postcss: ^8.4.47
  - tailwindcss: ^3.4.14
  - vite: ^5.4.10

## Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/DeveloperMonirBD/task-management-client.git
   cd task-management-client

2. Install dependencies:
    npm install

3. Start the development server:
    npm run dev

4. To build the project for production:
    npm run build

5. To preview the production build:
    npm run preview

## Technologies Used

### Frontend:

- Vite.js+ React
- TailwindCSS
- DaisyUI
- Flowbite-React
- Framer Motion
- React Beautiful DnD

Backend:

- Express.js
- MongoDB

### Design System

### Colors:

- Primary: #333
- Secondary: #fff
- Accent: #007bff
- Background: #f8f9fa

### Contact
For any inquiries, please contact mrmonir0558@gmail.com