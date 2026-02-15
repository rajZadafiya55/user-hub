import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import { UserFormData, User } from '../../types/user.types';
import { userFormConfig } from '../../config/userFormConfig';
import { generateYupSchema } from '../../utils/validation';
import FormField from './FormField';

interface UserFormProps {
    onSubmit: (data: UserFormData) => Promise<boolean>;
    initialData?: User | null;
    onCancel?: () => void;
}

const validationSchema = generateYupSchema(userFormConfig);

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialData, onCancel }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<UserFormData>({
        resolver: yupResolver(validationSchema) as any,
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        },
    });

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        } else {
            reset({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            });
        }
    }, [initialData, reset]);

    const handleFormSubmit = async (data: UserFormData) => {
        const success = await onSubmit(data);
        if (success && !initialData) {
            reset();
        }
    };

    return (
        <Paper sx={{ p: 4, mb: 4 }} elevation={0} variant="outlined">
            <Typography variant="h5" gutterBottom color="primary">
                {initialData ? 'Edit User' : 'Add New User'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    {userFormConfig.map((field) => (
                        <FormField
                            key={field.name}
                            config={field}
                            control={control}
                            error={errors[field.name]?.message}
                        />
                    ))}
                </Grid>
                <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    {onCancel && (
                        <Button onClick={onCancel} variant="outlined" color="inherit">
                            Cancel
                        </Button>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        size="large"
                    >
                        {initialData ? 'Update User' : 'Create User'}
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default UserForm;
