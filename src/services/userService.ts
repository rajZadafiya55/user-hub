import axios from 'axios';
import { User, UserFormData } from '../types/user.types';
import { API_BASE_URL, USERS_ENDPOINT } from '../config/apiConfig';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>(USERS_ENDPOINT);
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`${USERS_ENDPOINT}/${id}`);
    return response.data;
  },

  createUser: async (user: UserFormData): Promise<User> => {
    const response = await apiClient.post<User>(USERS_ENDPOINT, user);
    return response.data;
  },

  updateUser: async (id: number, user: UserFormData): Promise<User> => {
    const response = await apiClient.put<User>(`${USERS_ENDPOINT}/${id}`, user);
    return response.data;
  },

  deleteUser: async (id: number): Promise<void> => {
    await apiClient.delete(`${USERS_ENDPOINT}/${id}`);
  },
};
