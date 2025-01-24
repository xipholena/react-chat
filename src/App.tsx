import React, { useState, useEffect } from 'react';
import { ConnectionState } from './components/ConnectionState.tsx';
import { ConnectionManager } from './components/ConnectionManager.tsx';
import { Messages } from "./components/Messages.tsx";

import './App.css'

import { MyForm } from './components/MyForm.tsx';
import { socket } from './utils/socket.ts';
import { Grid2 } from '@mui/material';

export default function App() {

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([]);
  
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageEmit(value: any[]) {
      setMessages(previous => [...previous, value]);
    }

    socket?.on('connect', onConnect);
    socket?.on('disconnect', onDisconnect);
    socket?.on('onMessage', onMessageEmit);

    return () => {
      socket?.off('connect', onConnect);
      socket?.off('disconnect', onDisconnect);
      socket?.off('onMessage', onMessageEmit);
    };
  }, []);
  
  console.log('fooEvents',messages)
  console.log('socket', socket)
  console.log('isConnected',isConnected)
  return (
      <Grid2 container  justifyContent="space-around" minHeight={'100vh'}>
        <Grid2 container spacing={2} direction="column" justifyContent="center" alignItems="center">
          <MyForm isConnected={ isConnected }/>
        </Grid2>
        <Grid2 container spacing={2} height={'100%'}>
         <Messages events={ messages } />
       </Grid2>

      </Grid2>
  );
}
