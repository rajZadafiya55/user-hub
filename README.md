# UserHub - Production Ready React CRUD Application

UserHub is a complete, production-ready React-based CRUD application built with TypeScript and Material-UI. It features a schema-driven form architecture, robust validation, and a responsive design that adapts seamlessly from mobile to desktop.

## 🚀 Key Features

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

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: Material-UI (MUI) v6
- **Form Management**: React Hook Form
- **Validation**: Yup
- **API Client**: Axios
- **Mock Server**: JSON Server
- **Utilities**: Concurrently (run dev & server simultaneously)

## 📁 Project Structure

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

## 🏎️ Getting Started

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

## 🏗 Schema-Driven Architecture

The UserHub form is entirely driven by a configuration file located at `src/config/userFormConfig.ts`.

### How to Add New Fields

To add a new field (e.g., "Job Title"), simply update the `userFormConfig` array:

```typescript
// src/config/userFormConfig.ts

export const userFormConfig: FormFieldConfig[] = [
  // ... existing fields
  {
    name: 'jobTitle',
    label: 'Job Title',
    type: 'text',
    validation: {
      required: true,
      minLength: 3
    },
    gridSize: { xs: 12, sm: 6 },
  },
];
```

The application will automatically:
1.  **Render** the new field in the UI.
2.  **Validate** the field using the generated Yup schema.
3.  **Include** the field in the API payload.

## 📝 Design Decisions

1.  **Schema-Driven Approach**: To ensure maintainability and scalability, the form is decoupled from the JSX. This allows non-developers or designers to potentially manage field definitions or for the fields to be fetched from an API in the future.
2.  **Custom `useUsers` Hook**: Centralizes data fetching logic, loading states, and notification handling, keeping components clean and focused on UI.
3.  **Responsive Layout**: Used MUI's Grid system and `useMediaQuery` to switch between a Table (optimized for data density on desktop) and a Card view (optimized for thumb-interaction on mobile).
4.  **Error Boundaries**: Implemented to catch runtime errors in production and provide a graceful fallback UI.

## 📸 Screenshots

*Coming soon...* (Include screenshots of Desktop Table and Mobile Cards)
