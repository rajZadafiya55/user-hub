import React from 'react';
import { TextField, Grid } from '@mui/material';
import { Controller, Control } from 'react-hook-form';
import { FormFieldConfig } from '../../types/user.types';

interface FormFieldProps {
    config: FormFieldConfig;
    control: Control<any>;
    error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ config, control, error }) => {
    return (
        <Grid item {...config.gridSize}>
            <Controller
                name={config.name}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={config.label}
                        type={config.type}
                        fullWidth
                        error={!!error}
                        helperText={error}
                        variant="outlined"
                        // Use phone input specific attributes if tel
                        inputProps={config.type === 'tel' ? { inputMode: 'tel' } : {}}
                    />
                )}
            />
        </Grid>
    );
};

export default FormField;
