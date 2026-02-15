import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '80vh',
                            textAlign: 'center',
                            gap: 2,
                        }}
                    >
                        <Typography variant="h4" color="error">
                            Oops! Something went wrong.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            We're sorry for the inconvenience. Please try refreshing the page.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => window.location.reload()}
                            sx={{ mt: 2 }}
                        >
                            Refresh Page
                        </Button>
                    </Box>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
