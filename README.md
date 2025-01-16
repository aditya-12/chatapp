# Real-Time Chat App - MERN Stack

This is a real-time chat application built using the **MERN (MongoDB, Express, React, Node.js)** stack, enhanced with **Socket.io** for real-time messaging. Users can authenticate securely with **JWT** (JSON Web Tokens) and enjoy a seamless messaging experience. The app also provides online status tracking, global state management with **Zustand**, and clean, responsive UI built with **TailwindCSS** and **Daisy UI**.

## Features 🚀

- **Authentication with JSON Web Tokens (JWT)** 🔑  
  Secure user login and registration with token-based authentication.

- **Real-time Messaging with Socket.io** ⚡  
  Instantly exchange messages with other users using WebSockets.

- **Online User Status** 🟢  
  Users' online/offline status is displayed in real-time across all connected clients.

- **Global State Management with Zustand** 🌐  
  Manage app state globally with Zustand for efficient state handling across components.

- **Error Handling** 🐞  
  Comprehensive error handling on both the server and client-side for a smooth user experience.

- **Responsive UI** 💻📱  
  Clean and responsive design using **TailwindCSS** and **Daisy UI** for UI components.

---

## Tech Stack 🛠️

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

- **Frontend**: React.js ⚛️, TailwindCSS 🖌️, Daisy UI 🎨
- **Backend**: Node.js 🌐, Express.js 🛠️
- **Database**: MongoDB 🗃️
- **Authentication**: JSON Web Tokens (JWT) 🔑
- **Real-time Communication**: Socket.io ⚡
- **State Management**: Zustand 🔄
- **Styling**: TailwindCSS 🖌️ and Daisy UI 🎨

---

## Installation 🛠️

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (local or cloud database)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app
```

### 2. Set up the .env file Create a `.env` file in the root directory of your project and add the following environment variables:
```bash
MONGO_DB_URI=your_mongo_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```
### 3. Install dependencies
```bash
npm install
```
This will install all required dependencies as specified in the package.json file.
### 4. Build the application
```bash
npm run build
```
This will create a production build of your app that is ready to be deployed.
### 5. Start the application
```bash
npm start
```
This will launch the app, and you should be able to access it at http://localhost:5000 (or whatever port you have configured).

---
## Future Additions 🔮

Here are some **future additions** planned for the project:

1. **Private Chat Rooms** 🏠  
   - Implement private chat rooms for group discussions with multiple users.

2. **Message Search** 🔍  
   - Add the ability to search through chat history and find messages based on keywords.

3. **Message Reactions** ❤️  
   - Allow users to react to messages with emojis, enhancing the interaction experience.

4. **Push Notifications** 📲  
   - Implement push notifications to alert users about new messages even when they're offline.

5. **File Sharing** 📂  
   - Support the sharing of files (images, documents, etc.) between users in chat.

---

## Contributing 🤝

Feel free to fork the repository and create pull requests for new features or improvements. If you encounter any issues, please open an issue and we will address it as soon as possible.


Implement push notifications to alert users about new messages even when they're offline.
File Sharing 📂

Support the sharing of files (images, documents, etc.) between users in chat.
Contributing 🤝
Feel free to fork the repository and create pull requests for new features or improvements. If you encounter any issues, please open an issue and we will address it as soon as possible.
