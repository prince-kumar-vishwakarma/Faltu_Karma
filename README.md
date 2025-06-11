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
<img src="https://logodix.com/logo/1989638.png" width="48" height="48" alt="JWT"/>
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

### 🚀 **Meet Team Access Denied**

_Building the future of hostel management, one commit at a time_

<br/>

<!-- Team Lead -->
<div style="margin: 20px 0;">
<table>
<tr>
<td align="center">
<div style="position: relative; display: inline-block;">
<img src="https://avatars.githubusercontent.com/prince-kumar-vishwakarma?v=4" width="120" height="120" style="border-radius: 60px; border: 5px solid #FFD700; box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4); transition: transform 0.3s ease;"/>
<div style="position: absolute; top: -5px; right: -5px; background: #FFD700; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">
👑
</div>
</div>
<h3 style="margin: 15px 0 5px 0; color: #FFD700;">Prince Kumar Vishwakarma</h3>
<p style="margin: 0; color: #666; font-size: 14px;">🔗 Full-Stack Lead & Integration Specialist</p>
<p style="margin: 5px 0; font-size: 12px; color: #888;">MERN Stack Expert • API Architecture • Team Lead</p>
<a href="https://github.com/prince-kumar-vishwakarma" style="text-decoration: none;">
<img src="https://img.shields.io/badge/GitHub-prince--kumar--vishwakarma-181717?style=flat-square&logo=github" alt="GitHub"/>
</a>
</td>
</tr>
</table>
</div>

<!-- Core Development Team -->
<div style="margin: 40px 0;">
<h4 style="color: #333; margin-bottom: 25px;">🛠️ **Core Development Team**</h4>

<table>
<tr>
<td align="center" width="25%">
<img src="https://avatars.githubusercontent.com/Pavan-Kumar-Vishwakarma?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #10B981; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);"/>
<h4 style="margin: 12px 0 4px 0; color: #10B981;">Pavan Kumar Vishwakarma</h4>
<p style="margin: 0; color: #666; font-size: 13px;">⚙️ Backend Architect</p>
<p style="margin: 4px 0; font-size: 11px; color: #888;">Node.js • MongoDB • Server Logic</p>
<a href="https://github.com/Pavan-Kumar-Vishwakarma">
<img src="https://img.shields.io/badge/-Backend%20Expert-10B981?style=flat-square&logo=node.js&logoColor=white" alt="Backend"/>
</a>
</td>

<td align="center" width="25%">
<img src="https://avatars.githubusercontent.com/Abhishek12890551?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #3B82F6; box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);"/>
<h4 style="margin: 12px 0 4px 0; color: #3B82F6;">Abhishek</h4>
<p style="margin: 0; color: #666; font-size: 13px;">🎨 UI/UX Designer</p>
<p style="margin: 4px 0; font-size: 11px; color: #888;">Dashboard Design • User Experience</p>
<a href="https://github.com/Abhishek12890551">
<img src="https://img.shields.io/badge/-UI%2FUX%20Designer-3B82F6?style=flat-square&logo=figma&logoColor=white" alt="Designer"/>
</a>
</td>

<td align="center" width="25%">
<img src="https://avatars.githubusercontent.com/u/147483927?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #F59E0B; box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);"/>
<h4 style="margin: 12px 0 4px 0; color: #F59E0B;">Jayantika Pratik</h4>
<p style="margin: 0; color: #666; font-size: 13px;">⚛️ Frontend Developer</p>
<p style="margin: 4px 0; font-size: 11px; color: #888;">React Components • Interactive UI</p>
<a href="https://github.com/jayantikapratik">
<img src="https://img.shields.io/badge/-React%20Developer-F59E0B?style=flat-square&logo=react&logoColor=white" alt="React"/>
</a>
</td>

<td align="center" width="25%">
<img src="https://avatars.githubusercontent.com/muskan-kumari?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #EF4444; box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);"/>
<h4 style="margin: 12px 0 4px 0; color: #EF4444;">Muskan Kumari</h4>
<p style="margin: 0; color: #666; font-size: 13px;">� Frontend Developer</p>
<p style="margin: 4px 0; font-size: 11px; color: #888;">Modern UI • Responsive Design</p>
<a href="https://github.com/muskan-kumari">
<img src="https://img.shields.io/badge/-Frontend%20Expert-EF4444?style=flat-square&logo=javascript&logoColor=white" alt="Frontend"/>
</a>
</td>
</tr>
</table>
</div>

<!-- Team Achievements -->
<div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 15px; padding: 25px; margin: 30px 0;">
<h4 style="color: white; margin-bottom: 15px;">🏆 **Team Achievements**</h4>
<div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
<img src="https://img.shields.io/badge/👥%20Team%20Size-5%20Developers-ffffff?style=for-the-badge&labelColor=ff6b6b" alt="Team Size"/>
<img src="https://img.shields.io/badge/⚡%20Duration-2%20Weeks-ffffff?style=for-the-badge&labelColor=4ecdc4" alt="Duration"/>
<img src="https://img.shields.io/badge/💻%20Lines%20of%20Code-25K%2B-ffffff?style=for-the-badge&labelColor=45b7d1" alt="Lines"/>
<img src="https://img.shields.io/badge/🚀%20Features-15%2B-ffffff?style=for-the-badge&labelColor=96ceb4" alt="Features"/>
</div>
</div>

<!-- Call to Action -->
<div style="border: 2px dashed #ddd; border-radius: 10px; padding: 20px; margin: 25px 0; background: #f9f9f9;">
<h4 style="color: #333; margin-bottom: 10px;">🤝 **Want to Contribute?**</h4>
<p style="color: #666; margin: 0;">We welcome contributions! Check out our <a href="#contributing">contributing guidelines</a> to get started.</p>
</div>

</div>

---

<div align="center">
Built with ❤️ by Team Access Denied | Making hostel management simple and efficient.
</div>
