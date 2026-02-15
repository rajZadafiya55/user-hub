import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { People as PeopleIcon } from '@mui/icons-material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" color="primary" elevation={0} sx={{ mb: 4 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <PeopleIcon sx={{ mr: 2 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: '.1rem' }}
                    >
                        USERHUB
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            CRUD Management System
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
