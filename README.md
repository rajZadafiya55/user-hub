# UserHub - Production Ready React CRUD Application

UserHub is a complete, production-ready React-based CRUD application built with TypeScript and Material-UI. It features a schema-driven form architecture, robust validation, and a responsive design that adapts seamlessly from mobile to desktop.

##  Key Features

- **Schema-Driven Forms**: Dynamic form rendering based on a configuration schema.
- **Full CRUD Support**: Create, Read, Update, and Delete operations for user data.
- **Robust Validation**: Powered by Yup and React Hook Form.
- **Modern UI/UX**: Built with Material-UI (MUI), featuring:
  - Responsive Table (Desktop) & Card View (Mobile)
  - Loading indicators during API calls
  - Success/Error notifications (Snackbar)
  - Confirmation dialogs for destructive actions
  - Modern typography and color palette
- **Mock API**: Integrated JSON Server for local development.

##  Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: Material-UI (MUI) v6
- **Form Management**: React Hook Form
- **Validation**: Yup
- **API Client**: Axios
- **Mock Server**: JSON Server
- **Utilities**: Concurrently (run dev & server simultaneously)

##  Project Structure

```text
src/
├── components/
│   ├── UserForm/       # Dynamic form & field renderer
│   ├── UserList/       # Responsive table and cards
│   ├── Layout/         # Header and Footer
│   └── common/         # Reusable Dialogs, Loading, Notifications
├── config/             # Schema definitions & API config
├── services/           # Axios API services
├── types/              # TypeScript interfaces
├── utils/              # Validation generators & helpers
├── hooks/              # Custom React hooks (useUsers)
├── theme/              # MUI theme customization
└── App.tsx             # Main entry point
```

##  Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository** (or copy files):
    ```bash
    git clone <repo-url>
    cd userhub
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running Locally

To run both the React application and the mock JSON server simultaneously:

```bash
npm start
```

-   **React App**: [http://localhost:5173](http://localhost:5173)
-   **JSON Server**: [http://localhost:3001](http://localhost:3001)

Alternatively, run them in separate terminals:
```bash
# Terminal 1: Start JSON Server
npm run server

# Terminal 2: Start Vite Dev Server
npm run dev
```
# user-hub
# user-hub
