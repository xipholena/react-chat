import Typography from '@mui/material/Typography';
import React from 'react';

export function ConnectionState ({ isConnected, name }: { isConnected: boolean, name: string }) {
    return (
        <Typography component='p'>
            Hello, {name ? name : 'my friend'} ! You are {isConnected ? 'connected' : 'not connected'} to the chat
        </Typography>
    )
}
