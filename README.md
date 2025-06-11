# 🏠 UniHostel - Modern Hostel Management System

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Backend-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

> A comprehensive hostel management system built with the MERN stack for streamlined student accommodation management.

## 📖 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Installation](#-installation)
- [🌐 API Endpoints](#-api-endpoints)
- [👥 Contributors](#-contributors)

## 🎯 About

UniHostel is a modern hostel management system that provides students with a unified dashboard to manage their accommodation needs including room details, payments, maintenance requests, and visitor management.

## ✨ Features

- **Dashboard Overview** - Real-time stats and quick actions
- **Room Management** - Room details, roommate info, and amenities
- **Payment System** - Multiple payment methods and transaction history
- **Service Requests** - Visitor management, leave applications, gym access
- **Complaint Portal** - Issue tracking with status updates
- **Profile Management** - Student details and document storage

## 🛠️ Tech Stack

### Frontend

- **React.js 19.0.0** - Component-based UI library
- **Vite 6.2.0** - Build tool and dev server
- **React Router 7.5.0** - Client-side routing
- **FontAwesome 6.7.2** - Icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MongoDB 6.15.0** - NoSQL database
- **Mongoose 8.13.2** - MongoDB object modeling
- **JWT 9.0.2** - Authentication
- **bcrypt 5.1.1** - Password hashing

## 🚀 Installation

### Prerequisites

- Node.js (v16.0.0 or higher)
- MongoDB (v5.0 or higher)
- npm (v8.0 or higher)

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/unihostel.git
cd unihostel
```

2. **Backend setup**

```bash
cd backend
npm install

# Create .env file
MONGO_URI=mongodb://localhost:27017/unihostel
JWT_SECRET=your_secret_key
PORT=5000
```

3. **Frontend setup**

```bash
cd frontend
npm install
```

4. **Run the application**

Start backend server:

```bash
cd backend
npm run dev
```

Start frontend server:

```bash
cd frontend
npm run dev
```

Access the application at `http://localhost:5173`

## 🌐 API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Student registration
- `POST /api/v1/auth/login` - Student login
- `POST /api/v1/auth/logout` - User logout

### Student Management

- `GET /api/v1/students/profile/:id` - Get student profile
- `PUT /api/v1/students/update/:id` - Update student profile
- `GET /api/v1/students/dashboard` - Get dashboard data

### Room & Services

- `GET /api/v1/rooms/details/:id` - Get room details
- `POST /api/v1/services/request` - Submit service request
- `GET /api/v1/services/status/:id` - Check request status

## 👥 Contributors

<div align="center">

<table>
<tr>
<td align="center">
<a href="https://github.com/prince-kumar-vishwakarma">
<img src="https://avatars.githubusercontent.com/prince-kumar-vishwakarma?v=4" width="80px;" alt="Prince Kumar Vishwakarma"/>
<br />
<sub><b>Prince Kumar Vishwakarma</b></sub>
</a>
<br />
<small>Backend & Frontend Integrator</small>
</td>

<td align="center">
<a href="https://github.com/Pavan-Kumar-Vishwakarma">
<img src="https://avatars.githubusercontent.com/Pavan-Kumar-Vishwakarma?v=4" width="80px;" alt="Pavan Kumar Vishwakarma"/>
<br />
<sub><b>Pavan Kumar Vishwakarma</b></sub>
</a>
<br />
<small>Backend Developer</small>
</td>

<td align="center">
<a href="https://github.com/Abhishek12890551">
<img src="https://avatars.githubusercontent.com/Abhishek12890551?v=4" width="80px;" alt="Abhishek"/>
<br />
<sub><b>Abhishek</b></sub>
</a>
<br />
<small>UI/UX Designer</small>
</td>

<td align="center">
<a href="https://github.com/raj-sharma-dev">
<img src="https://avatars.githubusercontent.com/raj-sharma-dev?v=4" width="80px;" alt="Raj Sharma"/>
<br />
<sub><b>Raj Sharma</b></sub>
</a>
<br />
<small>Frontend Developer</small>
</td>

<td align="center">
<a href="https://github.com/priya-web-developer">
<img src="https://avatars.githubusercontent.com/priya-web-developer?v=4" width="80px;" alt="Priya Singh"/>
<br />
<sub><b>Priya Singh</b></sub>
</a>
<br />
<small>QA Engineer</small>
</td>
</tr>
</table>

</div>

---

<div align="center">
Built with ❤️ by Team Access Denied | Making hostel management simple and efficient.
</div>
