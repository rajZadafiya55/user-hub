import * as yup from 'yup';
import { FormFieldConfig } from '../types/user.types';

export const generateYupSchema = (config: FormFieldConfig[]) => {
  const schemaFields: Record<string, any> = {};

  config.forEach((field) => {
    let validator: any = yup.string();

    if (field.validation.required) {
      validator = validator.required(`${field.label} is required`);
    } else {
      validator = validator.nullable();
    }

    if (field.validation.minLength) {
      validator = validator.min(
        field.validation.minLength,
        `${field.label} must be at least ${field.validation.minLength} characters`
      );
    }

    if (field.validation.maxLength) {
      validator = validator.max(
        field.validation.maxLength,
        `${field.label} must be at most ${field.validation.maxLength} characters`
      );
    }

    if (field.validation.pattern) {
      validator = validator.matches(
        new RegExp(field.validation.pattern),
        field.validation.patternMessage || `Invalid ${field.label}`
      );
    }

    if (field.type === 'email') {
      validator = validator.email('Invalid email address');
    }

    schemaFields[field.name] = validator;
  });

  return yup.object().shape(schemaFields);
};
