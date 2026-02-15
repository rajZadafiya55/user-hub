import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
    useMediaQuery,
    useTheme,
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Grid,
    TextField,
    InputAdornment,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
import { User } from '../../types/user.types';

interface UserListProps {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter((user) =>
        `${user.firstName} ${user.lastName} ${user.email} ${user.phoneNumber}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const renderTableView = () => (
        <TableContainer component={Paper} elevation={0} variant="outlined">
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ bgcolor: 'grey.50' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredUsers.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} align="center" sx={{ py: 3 }}>
                                No users found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        filteredUsers.map((user) => (
                            <TableRow key={user.id} hover>
                                <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phoneNumber}</TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Edit">
                                        <IconButton onClick={() => onEdit(user)} color="primary" size="small">
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => onDelete(user.id)} color="error" size="small">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );

    const renderCardView = () => (
        <Grid container spacing={2}>
            {filteredUsers.length === 0 ? (
                <Grid item xs={12}>
                    <Typography align="center" sx={{ py: 3 }}>No users found.</Typography>
                </Grid>
            ) : (
                filteredUsers.map((user) => (
                    <Grid item xs={12} key={user.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" color="primary">
                                    {user.firstName} {user.lastName}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    {user.email}
                                </Typography>
                                <Typography variant="body2">
                                    {user.phoneNumber}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'flex-end', p: 2, pt: 0 }}>
                                <IconButton onClick={() => onEdit(user)} color="primary">
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => onDelete(user.id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    );

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Typography variant="h5" color="text.primary">
                    Users List
                </Typography>
                <TextField
                    size="small"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ width: { xs: '100%', sm: '300px' } }}
                />
            </Box>
            {isMobile ? renderCardView() : renderTableView()}
        </Box>
    );
};

export default UserList;
