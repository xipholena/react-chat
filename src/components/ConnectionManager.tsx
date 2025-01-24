import React, { useEffect, useState } from 'react';
import { socket } from '../utils/socket.ts';
import Button from '@mui/material/Button';
import { Grid2, TextField } from '@mui/material';



export function ConnectionManager({name, setName}: {name: string, setName: (name: string) => void}) {
    const connect = () => {
        socket?.connect();
    }

    const disconnect = () => {
        socket?.disconnect();
    }

    useEffect(() => {
        return () => {
            socket?.disconnect();
        };
    }, []);

    return (
        <>
        <TextField  value={name} label="Type your name" variant="outlined" onChange={ e => setName(e.target.value)} />
        <Grid2 container spacing={2} justifyContent="center" alignItems="center">
            <Button onClick={connect} variant="contained" disabled={!name}>Connect</Button>
            <Button onClick={disconnect} variant="outlined">Disconnect</Button>
        </Grid2>
        </>
        
    );
}
