export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export type UserFormData = Omit<User, 'id'> & { id?: number };

export interface FormFieldConfig {
  name: keyof UserFormData;
  label: string;
  type: 'text' | 'email' | 'tel';
  validation: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    patternMessage?: string;
  };
  gridSize: {
    xs: number;
    sm?: number;
    md?: number;
  };
}
