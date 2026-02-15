import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ py: 6, mt: 'auto', backgroundColor: '#f1f5f9' }}>
            <Container maxWidth="lg">
                <Divider sx={{ mb: 4 }} />
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="#">
                        UserHub CRUD
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'. Built with React, TypeScript & MUI.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
