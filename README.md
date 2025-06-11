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

<div align="center">

### 🎨 Frontend Technologies

<table>
<tr>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React"/>
<br/>
<strong>React.js</strong>
<br/>
<sub>v19.0.0</sub>
</td>
<td align="center" width="120">
<img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite"/>
<br/>
<strong>Vite</strong>
<br/>
<sub>v6.2.0</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript"/>
<br/>
<strong>JavaScript</strong>
<br/>
<sub>ES6+</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3"/>
<br/>
<strong>CSS3</strong>
<br/>
<sub>Modern</sub>
</td>
</tr>
</table>

### ⚙️ Backend Technologies

<table>
<tr>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="48" height="48" alt="Node.js"/>
<br/>
<strong>Node.js</strong>
<br/>
<sub>Runtime</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="48" height="48" alt="Express.js"/>
<br/>
<strong>Express.js</strong>
<br/>
<sub>v5.1.0</sub>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="48" height="48" alt="MongoDB"/>
<br/>
<strong>MongoDB</strong>
<br/>
<sub>v6.15.0</sub>
</td>
<td align="center" width="120">
<img src="https://raw.githubusercontent.com/auth0/node-jsonwebtoken/master/sign.png" width="48" height="48" alt="JWT"/>
<br/>
<strong>JWT</strong>
<br/>
<sub>v9.0.2</sub>
</td>
</tr>
</table>

</div>

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

### 🌟 Meet Our Amazing Development Team

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; padding: 30px; margin: 20px 0;">

<table style="border: none;">
<tr>
<td align="center" style="padding: 20px;">
<div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<a href="https://github.com/prince-kumar-vishwakarma">
<img src="https://avatars.githubusercontent.com/prince-kumar-vishwakarma?v=4" width="100px;" alt="Prince Kumar Vishwakarma" style="border-radius: 50%; border: 4px solid #FFD700; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"/>
</a>
<br/><br/>
<h4 style="color: #FFD700; margin: 10px 0;">Prince Kumar Vishwakarma</h4>
<p style="color: #ffffff; margin: 5px 0;">🔗 Backend & Frontend Integrator</p>
<div style="color: #E0E7FF; font-size: 12px;">
💻 MERN Stack Expert<br/>
🚀 API Integration Specialist
</div>
</div>
</td>

<td align="center" style="padding: 20px;">
<div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<a href="https://github.com/Pavan-Kumar-Vishwakarma">
<img src="https://avatars.githubusercontent.com/Pavan-Kumar-Vishwakarma?v=4" width="100px;" alt="Pavan Kumar Vishwakarma" style="border-radius: 50%; border: 4px solid #10B981; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"/>
</a>
<br/><br/>
<h4 style="color: #10B981; margin: 10px 0;">Pavan Kumar Vishwakarma</h4>
<p style="color: #ffffff; margin: 5px 0;">⚙️ Backend Developer</p>
<div style="color: #E0E7FF; font-size: 12px;">
🔧 Node.js Specialist<br/>
🗄️ Database Architect
</div>
</div>
</td>

<td align="center" style="padding: 20px;">
<div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<a href="https://github.com/Abhishek12890551">
<img src="https://avatars.githubusercontent.com/Abhishek12890551?v=4" width="100px;" alt="Abhishek" style="border-radius: 50%; border: 4px solid #3B82F6; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"/>
</a>
<br/><br/>
<h4 style="color: #3B82F6; margin: 10px 0;">Abhishek</h4>
<p style="color: #ffffff; margin: 5px 0;">🎨 UI/UX Designer</p>
<div style="color: #E0E7FF; font-size: 12px;">
✨ Dashboard Design Expert<br/>
📱 User Experience Specialist
</div>
</div>
</td>
</tr>

<tr>
<td align="center" style="padding: 20px;">
<div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<a href="https://github.com/jayantikapratik">
<img src="https://avatars.githubusercontent.com/u/147483927?v=4" width="100px;" alt="Jayantika Pratik" style="border-radius: 50%; border: 4px solid #F59E0B; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"/>
</a>
<br/><br/>
<h4 style="color: #F59E0B; margin: 10px 0;">Jayantika Pratik</h4>
<p style="color: #ffffff; margin: 5px 0;">🚀 Frontend Developer</p>
<div style="color: #E0E7FF; font-size: 12px;">
⚛️ React Components<br/>
🎯 Interactive Features
</div>
</div>
</td>

<td align="center" style="padding: 20px;">
<div style="background: rgba(255,255,255,0.1); border-radius: 20px; padding: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<a href="https://github.com/muskan-kumari">
<img src="https://avatars.githubusercontent.com/muskan-kumari?v=4" width="100px;" alt="Muskan Kumari" style="border-radius: 50%; border: 4px solid #EF4444; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"/>
</a>
<br/><br/>
<h4 style="color: #EF4444; margin: 10px 0;">Muskan Kumari</h4>
<p style="color: #ffffff; margin: 5px 0;">🚀 Frontend Developer</p>
<div style="color: #E0E7FF; font-size: 12px;">
💫 Modern UI Components<br/>
📲 Responsive Design
</div>
</div>
</td>
</tr>
</table>

</div>

### 📊 Team Stats

<div style="margin: 30px 0;">
<img src="https://img.shields.io/badge/Team%20Size-5%20Developers-brightgreen?style=for-the-badge&logo=users" alt="Team Size"/>
<img src="https://img.shields.io/badge/Total%20Commits-500%2B-blue?style=for-the-badge&logo=git" alt="Commits"/>
<img src="https://img.shields.io/badge/Lines%20of%20Code-25K%2B-purple?style=for-the-badge&logo=code" alt="Lines of Code"/>
<img src="https://img.shields.io/badge/Project%20Duration-2%20Weeks-orange?style=for-the-badge&logo=calendar" alt="Duration"/>
</div>

</div>

---

<div align="center">
Built with ❤️ by Team Access Denied | Making hostel management simple and efficient.
</div>
