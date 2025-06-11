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
- [📁 Project Structure](#-project-structure)
- [�🚀 Installation](#-installation)
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
<img src="https://logodix.com/logo/1989596.png" width="48" height="48" alt="JWT"/>
<br/>
<strong>JWT</strong>
<br/>
<sub>v9.0.2</sub>
</td>
</tr>
</table>

</div>

## 📁 Project Structure

<div align="center">

### 🏗️ **Architecture Overview**

```
UniHostel/
├── 📁 backend/                          # Backend Node.js application
│   ├── 📄 index.js                      # Server entry point
│   ├── 📄 package.json                  # Backend dependencies
│   ├── 📁 config/
│   │   └── 📄 db.js                     # MongoDB connection configuration
│   ├── 📁 controllers/
│   │   ├── 📄 adminController.js        # Admin management operations
│   │   └── 📄 authController.js         # Authentication and authorization
│   ├── 📁 middleware/
│   │   └── 📄 authMiddleware.js         # JWT token validation
│   ├── 📁 models/
│   │   ├── 📄 allotmentModel.js         # Room allocation schema
│   │   ├── 📄 roomModel.js              # Room information schema
│   │   └── 📄 studentModel.js           # Student profile schema
│   └── 📁 routes/
│       ├── 📄 adminRoutes.js            # Admin API endpoints
│       ├── 📄 authRoutes.js             # Authentication routes
│       └── 📄 studentRoutes.js          # Student operation routes
│
├── 📁 frontend/                         # Frontend React application
│   ├── 📄 index.html                    # Main HTML template
│   ├── 📄 package.json                  # Frontend dependencies
│   ├── 📄 eslint.config.js              # ESLint configuration
│   ├── 📁 public/
│   │   └── 📄 vite.svg                  # Application assets
│   └── 📁 src/
│       ├── 📄 App.jsx                   # Main application component
│       ├── 📄 main.jsx                  # Application entry point
│       ├── 📄 index.css                 # Global CSS styles
│       ├── 📁 components/               # Reusable UI components
│       │   ├── 📁 Body/                 # Homepage body components
│       │   │   ├── 📄 Body.jsx
│       │   │   ├── 📁 body1/            # Hero section
│       │   │   ├── 📁 body2/            # Features showcase
│       │   │   └── 📁 card/             # Feature cards
│       │   ├── 📁 buttons/              # Button components
│       │   ├── 📁 Footer/               # Footer component
│       │   ├── 📁 header/               # Header component
│       │   ├── 📁 Navbar/               # Navigation component
│       │   └── 📁 sidebar/              # Dashboard sidebar
│       ├── 📁 pages/                    # Application pages
│       │   ├── 📁 dashboard/            # Dashboard pages
│       │   │   ├── 📄 Dashboard.jsx
│       │   │   ├── 📁 complaints/       # Complaint management
│       │   │   ├── 📁 header/           # Dashboard header
│       │   │   ├── 📁 overview/         # Dashboard overview
│       │   │   ├── 📁 payments/         # Payment management
│       │   │   ├── 📁 profile/          # User profile
│       │   │   ├── 📁 room/             # Room details
│       │   │   └── 📁 services/         # Service requests
│       │   ├── 📁 about/                # About page
│       │   ├── 📁 contact/              # Contact page
│       │   ├── 📁 features/             # Features page
│       │   ├── 📁 help/                 # Help and support
│       │   ├── 📁 homePage/             # Landing page
│       │   ├── 📁 login/                # Login interface
│       │   ├── 📁 pricing/              # Pricing information
│       │   ├── 📁 privacy/              # Privacy policy
│       │   ├── 📁 servicess/            # Services overview
│       │   └── 📁 signup/               # Registration interface
│       └── 📁 utils/
│           └── 📄 axiosInstance.js      # API client configuration
│
└── 📄 README.md                         # Project documentation
```

### 🎯 **Key Directories**

<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Backend"/>
<h4>Backend</h4>
<p>Node.js + Express<br/>RESTful API</p>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="Frontend"/>
<h4>Frontend</h4>
<p>React.js + Vite<br/>Modern UI</p>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40" alt="Database"/>
<h4>Database</h4>
<p>MongoDB<br/>NoSQL Storage</p>
</td>
<td align="center" width="25%">
<img src="https://logodix.com/logo/1989638.png" width="40" height="40" alt="Auth"/>
<h4>Authentication</h4>
<p>JWT Tokens<br/>Secure Access</p>
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

<!-- Circular Team Layout -->
<div style="position: relative; width: 400px; height: 400px; margin: 50px auto;">

<!-- Center Logo/Title -->
<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 80px; width: 160px; height: 160px; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);">
<h3 style="color: white; margin: 0; font-size: 16px;">🏠 UniHostel</h3>
<p style="color: #E0E7FF; margin: 5px 0 0 0; font-size: 12px;">Development Team</p>
<div style="color: #FFD700; font-size: 14px; margin-top: 5px;">⭐ ⭐ ⭐ ⭐ ⭐</div>
</div>

<!-- Team Member 1 - Prince (Top) -->
<div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); text-align: center;">
<div style="position: relative;">
<img src="https://avatars.githubusercontent.com/prince-kumar-vishwakarma?v=4" width="100" height="100" style="border-radius: 50px; border: 5px solid #FFD700; box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);"/>
<div style="position: absolute; top: -5px; right: -5px; background: #FFD700; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px;">👑</div>
</div>
<h4 style="margin: 10px 0 2px 0; color: #FFD700; font-size: 14px;">Prince Kumar</h4>
<p style="margin: 0; color: #666; font-size: 11px;">Full-Stack Lead</p>
<a href="https://github.com/prince-kumar-vishwakarma">
<img src="https://img.shields.io/badge/-Lead-FFD700?style=flat-square&logo=crown&logoColor=white" alt="Lead"/>
</a>
</div>

<!-- Team Member 2 - Pavan (Top Right) -->
<div style="position: absolute; top: 15%; right: 0; text-align: center;">
<img src="https://avatars.githubusercontent.com/Pavan-Kumar-Vishwakarma?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #10B981; box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);"/>
<h4 style="margin: 8px 0 2px 0; color: #10B981; font-size: 13px;">Pavan Kumar</h4>
<p style="margin: 0; color: #666; font-size: 10px;">Backend Architect</p>
<a href="https://github.com/Pavan-Kumar-Vishwakarma">
<img src="https://img.shields.io/badge/-Backend-10B981?style=flat-square&logo=node.js&logoColor=white" alt="Backend"/>
</a>
</div>

<!-- Team Member 3 - Abhishek (Bottom Right) -->
<div style="position: absolute; bottom: 15%; right: 0; text-align: center;">
<img src="https://avatars.githubusercontent.com/Abhishek12890551?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #3B82F6; box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);"/>
<h4 style="margin: 8px 0 2px 0; color: #3B82F6; font-size: 13px;">Abhishek</h4>
<p style="margin: 0; color: #666; font-size: 10px;">UI/UX Designer</p>
<a href="https://github.com/Abhishek12890551">
<img src="https://img.shields.io/badge/-Designer-3B82F6?style=flat-square&logo=figma&logoColor=white" alt="Designer"/>
</a>
</div>

<!-- Team Member 4 - Jayantika (Bottom Left) -->
<div style="position: absolute; bottom: 15%; left: 0; text-align: center;">
<img src="https://avatars.githubusercontent.com/u/147483927?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #F59E0B; box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);"/>
<h4 style="margin: 8px 0 2px 0; color: #F59E0B; font-size: 13px;">Jayantika Pratik</h4>
<p style="margin: 0; color: #666; font-size: 10px;">Frontend Developer</p>
<a href="https://github.com/jayantikapratik">
<img src="https://img.shields.io/badge/-React-F59E0B?style=flat-square&logo=react&logoColor=white" alt="React"/>
</a>
</div>

<!-- Team Member 5 - Muskan (Top Left) -->
<div style="position: absolute; top: 15%; left: 0; text-align: center;">
<img src="https://avatars.githubusercontent.com/muskankumari82672?v=4" width="90" height="90" style="border-radius: 45px; border: 4px solid #EF4444; box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);"/>
<h4 style="margin: 8px 0 2px 0; color: #EF4444; font-size: 13px;">Muskan Kumari</h4>
<p style="margin: 0; color: #666; font-size: 10px;">Frontend Developer</p>
<a href="https://github.com/muskankumari82672">
<img src="https://img.shields.io/badge/-Frontend-EF4444?style=flat-square&logo=javascript&logoColor=white" alt="Frontend"/>
</a>
</div>

</div>

## Team Achievements

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

---

<div align="center">
Built with ❤️ by Team Access Denied | Making hostel management simple and efficient.
</div>
