import { FormFieldConfig } from '../types/user.types';

export const userFormConfig: FormFieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    gridSize: { xs: 12, sm: 6 },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    gridSize: { xs: 12, sm: 6 },
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    validation: {
      required: true,
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      patternMessage: 'Invalid email address',
    },
    gridSize: { xs: 12 },
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'tel',
    validation: {
      required: true,
      pattern: '^(\\+91\\s\\d{5}-\\d{5}|\\d{10})$',
      patternMessage: 'Format: +91 XXXXX-XXXXX or 10 digits',
    },
    gridSize: { xs: 12 },
  },
];
