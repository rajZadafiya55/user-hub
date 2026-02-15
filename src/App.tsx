import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography, Button, Paper } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import theme from './theme/theme';
import { Header, Footer } from './components/Layout';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';
import Loading from './components/common/Loading';
import Notification from './components/common/Notification';
import ConfirmDialog from './components/common/ConfirmDialog';
import { useUsers } from './hooks/useUsers';
import { User, UserFormData } from './types/user.types';

const App: React.FC = () => {
  const {
    users,
    loading,
    notification,
    hideNotification,
    addUser,
    updateUser,
    deleteUser,
  } = useUsers();

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleCreateNew = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
  };

  const handleConfirmDelete = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      setDeleteId(null);
    }
  };

  const handleFormSubmit = async (data: UserFormData) => {
    let success = false;
    if (editingUser) {
      success = await updateUser(editingUser.id, data);
    } else {
      success = await addUser(data);
    }

    if (success) {
      setIsFormOpen(false);
      setEditingUser(null);
    }
    return success;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: 1, pb: 4 }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              User Management
            </Typography>
            {!isFormOpen && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleCreateNew}
              >
                Add User
              </Button>
            )}
          </Box>

          {isFormOpen && (
            <UserForm
              onSubmit={handleFormSubmit}
              initialData={editingUser}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingUser(null);
              }}
            />
          )}

          <Paper elevation={0}>
            <UserList
              users={users}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          </Paper>
        </Container>
        <Footer />
      </Box>

      <Loading open={loading} />

      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={hideNotification}
      />

      <ConfirmDialog
        open={!!deleteId}
        title="Confirm Delete"
        message="Are you sure you want to delete this user? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteId(null)}
      />
    </ThemeProvider>
  );
};

export default App;
