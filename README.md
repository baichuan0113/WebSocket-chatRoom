# WebSocket Chat Room

## Overview

This is a simple real-time chat application built using WebSockets. The application allows multiple users to join a chat room, send messages to each other, and receive notifications when users join or leave the chat room.

## Features

- **Real-time Communication:** Messages are sent and received in real time using WebSockets.
- **User Notifications:** Users are notified when someone joins or leaves the chat room.
- **User Identification:** Each user is assigned a unique identifier (e.g., "User1", "User2") upon joining the chat room.
- **Simple and Intuitive UI:** A clean and minimalistic user interface for an easy chat experience.
- **Message Effects:** New messages appear with a smooth fade-in and slide-up effect.

## Technologies Used

- **Node.js:** The backend is built using Node.js, handling WebSocket connections and broadcasting messages.
- **WebSocket:** Real-time bidirectional communication between the server and clients.
- **HTML/CSS:** The front-end is built using simple HTML and CSS, with a focus on responsiveness and user experience.
- **JavaScript:** Client-side scripting to handle WebSocket events and DOM manipulation.

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/websocket-chat-room.git
   cd websocket-chat-room
   cd server
   npm run dev
   
