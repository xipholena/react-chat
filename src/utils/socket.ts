import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

const socket = 
URL 
    ? io(
        URL,
        /** По дефолту Socket.IO открывает connection to the server right away. Опция autoConnect позаботится об этом,
         * но тогда нужно будет открывать соединение руками:  socket.connect() */
        {
            autoConnect: false
        }
    )
    : undefined;

export { socket };