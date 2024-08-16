const ws = require('ws')
const server = new ws.Server({ port: '3000' })

var count = 0; // Count of all users
server.on('connection', socket => {
    count++; // Increment the user count when a new connection is established
    const userName = `User${count}`;
    console.log(`${userName} joined!`);
    server.clients.forEach(client => {
        client.send(`${userName} joined`); // Send a message to the newly connected user
    });

    socket.on('message', message => {
        const buffer = Buffer.from(message)
        const messageString = buffer.toString();
        console.log(messageString)
        socket.send(`${message}`) // Echo the message back to the sender


        // Broadcast the message to all other connected clients
        server.clients.forEach(client => {
            if (client !== socket && client.readyState === ws.OPEN) {
                var msg = `${userName}: ${messageString}`
                client.send(msg);
            }
        });
    })

    //Handle cases of user leaves
    socket.on('close', () => {
        count--; // Decrement the user count
        console.log(`${userName} left`);
        server.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(`${userName} left`); // Send the leave message to the other clients
            }
        });
    });
})

