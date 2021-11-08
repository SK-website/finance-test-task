import io from 'socket.io-client';

const API_URL = 'http://localhost:4000/';
const socket = io(API_URL, { reconnectionAttempts: 3 });

export default socket;
