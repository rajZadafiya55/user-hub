import { useState, useEffect, useCallback } from 'react';
import { User, UserFormData } from '../types/user.types';
import { userService } from '../services/userService';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const showNotification = useCallback((message: string, severity: 'success' | 'error') => {
    setNotification({ open: true, message, severity });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification((prev) => ({ ...prev, open: false }));
  }, []);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await userService.getAllUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users');
      showNotification('Could not load users. Is the server running?', 'error');
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  const addUser = async (userData: UserFormData) => {
    setLoading(true);
    try {
      await userService.createUser(userData);
      showNotification('User created successfully!', 'success');
      await fetchUsers();
      return true;
    } catch (err) {
      showNotification('Failed to create user', 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: number, userData: UserFormData) => {
    setLoading(true);
    try {
      await userService.updateUser(id, userData);
      showNotification('User updated successfully!', 'success');
      await fetchUsers();
      return true;
    } catch (err) {
      showNotification('Failed to update user', 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    setLoading(true);
    try {
      await userService.deleteUser(id);
      showNotification('User deleted successfully!', 'success');
      await fetchUsers();
      return true;
    } catch (err) {
      showNotification('Failed to delete user', 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    error,
    notification,
    hideNotification,
    addUser,
    updateUser,
    deleteUser,
    refreshUsers: fetchUsers,
  };
};
