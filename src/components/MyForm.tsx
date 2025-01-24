import React, { useState } from 'react';
import { socket } from '../utils/socket.ts';
import { messages } from '../enums.ts';
import Button from '@mui/material/Button';
import { Grid2, TextField } from '@mui/material';
import { ConnectionManager } from './ConnectionManager.tsx';
import { ConnectionState } from './ConnectionState.tsx';


export function MyForm({ isConnected}: {isConnected: boolean}) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function onSubmit(event: any) {
        event.preventDefault();
        if (message && !message.includes('глупость')) {
            socket?.emit(messages.NEW_MESSAGE, {message: message, name: name});
        }
        setMessage('');
    }

    return (
        <>
             <Grid2 container spacing={2} direction="column" justifyContent="center" alignItems="center">
                <ConnectionManager name={name} setName={setName} />
                <ConnectionState isConnected={ isConnected} name={name}/>
            </Grid2>
            <form onSubmit={ onSubmit }>
                <Grid2 container spacing={2} justifyContent="center" alignItems="space-between">
                    <TextField multiline value={message} label="Type your message" variant="outlined" onChange={ e => setMessage(e.target.value)} />
                    <Button type="submit" disabled={!isConnected} variant="outlined">Submit</Button>
                </Grid2>
            </form>
        </>
    );
}
