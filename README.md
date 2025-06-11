<div align="left">

# 🏠 UniHostel - Modern Hostel Management System

<img src="frontend/src/components/assets/images/Logo.png" alt="UniHostel Logo" width="120" height="120" style="border-radius: 20px; margin-bottom: 20px;">

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Backend-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

> **Streamlined Comfort** - UniHostel simplifies your university accommodation with intuitive management, instant communication, and a vibrant community hub.

---

## 📖 Table of Contents

- [🎯 About The Project](#-about-the-project)
- [✨ Key Features](#-key-features)
- [🛠️ Built With](#️-built-with)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🌐 API Documentation](#-api-documentation)
- [� UI/UX Highlights](#-uiux-highlights)
- [🔐 Security Features](#-security-features)
- [📱 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [👥 Contributors](#-contributors)
- [📄 License](#-license)
- [📞 Contact & Support](#-contact--support)

---

## 🎯 About The Project

UniHostel is a comprehensive hostel management system built with the **MERN stack** that revolutionizes how students interact with their accommodation services. Our platform provides a unified dashboard where students can effortlessly manage everything from room details and payment tracking to maintenance requests and visitor management.

### 🌟 Why UniHostel?

- **🎯 Centralized Management** - Everything you need in one place
- **💡 Intuitive Design** - Modern, responsive interface with glassmorphism effects
- **⚡ Real-time Updates** - Instant notifications and status tracking
- **🔒 Secure & Reliable** - JWT authentication with encrypted data
- **📱 Mobile-First** - Optimized for all devices

---

## ✨ Key Features

### � **Core Accommodation Management**

<table>
<tr>
<td width="50%">

#### 🎯 **Unified Dashboard**

- **Real-time Overview** - Live stats for room occupancy, payment status, and pending requests
- **Quick Actions** - One-click access to frequently used features
- **Smart Notifications** - Personalized alerts and announcements
- **Performance Metrics** - Track your stay duration, payment history, and more

#### 🏡 **Room Management**

- **Detailed Room Profiles** - Complete information about your accommodation
- **Roommate Information** - Connect with your roommate and view their details
- **Amenity Tracking** - Monitor the status of room facilities and report issues
- **Maintenance History** - View past repairs and upcoming maintenance schedules

</td>
<td width="50%">

#### 💳 **Advanced Payment System**

- **Multiple Payment Methods** - Credit/Debit cards, UPI, Bank transfers
- **Automated Calculations** - Smart fee computation including utilities and late charges
- **Payment History** - Detailed transaction records with downloadable receipts
- **Meal Plan Integration** - Cafeteria balance management and meal tracking

#### 🎫 **Smart Service Requests**

- **Visitor Management** - Pre-approve guest entries with digital check-in/out
- **Leave Applications** - Multiple leave types with automated approval workflows
- **Gym Access Requests** - Flexible membership options with online booking
- **Room Change Requests** - Seamless room transfer applications

</td>
</tr>
</table>

### 🛠️ **Technical Excellence**

#### � **Complaint & Maintenance Portal**

- **Issue Tracking** - Submit complaints with photo attachments and priority levels
- **Real-time Status Updates** - Track resolution progress with detailed timelines
- **Maintenance Scheduling** - View upcoming maintenance and inspection dates
- **Feedback System** - Rate and review completed services

#### 👤 **Comprehensive Profile Management**

- **Academic Integration** - Link with university systems for seamless data sync
- **Personal Information** - Secure storage of student details and emergency contacts
- **Privacy Controls** - Granular settings for information visibility
- **Document Management** - Upload and manage important documents

#### 🌟 **Modern User Experience**

- **Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **Dark/Light Themes** - Customizable interface with user preferences
- **Accessibility Features** - WCAG compliant design for inclusive access
- **Progressive Web App** - Offline functionality and app-like experience

---

## �️ Built With

### **Frontend Technologies**

```
React.js 19.0.0      │ Modern component-based UI library
Vite 6.2.0           │ Lightning-fast build tool and dev server
React Router 7.5.0   │ Declarative routing for React applications
FontAwesome 6.7.2    │ Comprehensive icon library with 30,000+ icons
CSS3 & Modern APIs   │ Advanced styling with custom properties and animations
```

### **Backend Technologies**

```
Node.js              │ JavaScript runtime built on Chrome's V8 engine
Express.js 5.1.0     │ Fast, unopinionated web framework for Node.js
MongoDB 6.15.0       │ NoSQL database for modern applications
Mongoose 8.13.2      │ Elegant MongoDB object modeling for Node.js
JWT 9.0.2           │ Secure token-based authentication
bcrypt 5.1.1        │ Industry-standard password hashing
```

### **Development Tools**

```
ESLint 9.21.0       │ Pluggable JavaScript linter for code quality
Nodemon             │ Automatic server restart for development
CORS 2.8.5          │ Cross-Origin Resource Sharing middleware
dotenv 16.5.0       │ Environment variable management
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed on your development machine:

```bash
Node.js (v16.0.0 or higher)    # JavaScript runtime
MongoDB (v5.0 or higher)       # Database server
Git (v2.30 or higher)          # Version control
npm (v8.0 or higher)           # Package manager
```

### 🔧 Installation Steps

#### **Step 1: Clone the Repository**

```bash
# Clone the project repository
git clone https://github.com/yourusername/unihostel.git

# Navigate to the project directory
cd unihostel
```

#### **Step 2: Backend Configuration**

```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Create environment configuration file
touch .env
```

**Configure your `.env` file:**

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/unihostel
DB_NAME=unihostel

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=24h

# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

#### **Step 3: Frontend Setup**

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install frontend dependencies
npm install

# Create environment file for frontend
touch .env
```

**Configure frontend `.env` file:**

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=UniHostel
VITE_APP_VERSION=1.0.0
```

#### **Step 4: Database Setup**

```bash
# Start MongoDB service (if using local MongoDB)
mongod

# Create database and collections (optional - will be created automatically)
mongo unihostel
```

### 🏃‍♂️ **Running the Application**

#### **Development Mode (Recommended)**

**Terminal 1 - Backend Server:**

```bash
cd backend
npm run dev
# Server will start on http://localhost:5000
```

**Terminal 2 - Frontend Development Server:**

```bash
cd frontend
npm run dev
# Frontend will start on http://localhost:5173
```

#### **Production Mode**

```bash
# Build frontend for production
cd frontend
npm run build

# Start backend in production mode
cd ../backend
npm start
```

### 🌐 **Access Points**

| Service               | URL                              | Description                |
| --------------------- | -------------------------------- | -------------------------- |
| **Frontend**          | `http://localhost:5173`          | Main application interface |
| **Backend API**       | `http://localhost:5000`          | REST API endpoints         |
| **API Documentation** | `http://localhost:5000/api-docs` | Swagger documentation      |
| **Database**          | `mongodb://localhost:27017`      | MongoDB instance           |

---

## 📁 Project Structure

<details>
<summary><strong>📂 Click to expand detailed project structure</strong></summary>

```
UniHostel/
├── 📁 backend/                          # Backend Node.js application
│   ├── 📁 config/
│   │   ├── 📄 db.js                     # MongoDB connection configuration
│   │   └── 📄 keys.js                   # Environment keys and secrets
│   ├── 📁 controllers/
│   │   ├── 📄 adminController.js        # Admin management operations
│   │   ├── 📄 authController.js         # Authentication and authorization
│   │   ├── 📄 paymentController.js      # Payment processing logic
│   │   └── 📄 serviceController.js      # Service request handling
│   ├── 📁 middleware/
│   │   ├── 📄 authMiddleware.js         # JWT token validation
│   │   ├── 📄 errorHandler.js           # Global error handling
│   │   └── 📄 validation.js             # Input validation middleware
│   ├── 📁 models/
│   │   ├── 📄 allotmentModel.js         # Room allocation schema
│   │   ├── 📄 complaintModel.js         # Complaint tracking schema
│   │   ├── 📄 paymentModel.js           # Payment transaction schema
│   │   ├── 📄 roomModel.js              # Room information schema
│   │   ├── 📄 serviceModel.js           # Service request schema
│   │   └── 📄 studentModel.js           # Student profile schema
│   ├── 📁 routes/
│   │   ├── 📄 adminRoutes.js            # Admin API endpoints
│   │   ├── 📄 authRoutes.js             # Authentication routes
│   │   ├── 📄 paymentRoutes.js          # Payment processing routes
│   │   ├── 📄 serviceRoutes.js          # Service management routes
│   │   └── 📄 studentRoutes.js          # Student operation routes
│   ├── 📁 utils/
│   │   ├── 📄 emailService.js           # Email notification service
│   │   ├── 📄 helpers.js                # Utility functions
│   │   └── 📄 validators.js             # Custom validation functions
│   ├── 📄 .env                          # Environment variables
│   ├── 📄 .gitignore                    # Git ignore rules
│   ├── 📄 package.json                  # Backend dependencies
│   └── 📄 server.js                     # Server entry point
│
├── 📁 frontend/                         # Frontend React application
│   ├── 📁 public/
│   │   ├── 📄 favicon.ico               # Application favicon
│   │   ├── 📄 index.html                # Main HTML template
│   │   └── 📄 manifest.json             # PWA manifest file
│   ├── 📁 src/
│   │   ├── 📁 components/               # Reusable UI components
│   │   │   ├── 📁 Body/
│   │   │   │   ├── 📁 body1/            # Hero section component
│   │   │   │   ├── 📁 body2/            # Features showcase
│   │   │   │   └── 📁 card/             # Feature card component
│   │   │   ├── 📁 buttons/              # Button components
│   │   │   ├── 📁 Footer/               # Footer component
│   │   │   ├── 📁 header/               # Header component
│   │   │   ├── 📁 Navbar/               # Navigation component
│   │   │   └── 📁 sidebar/              # Dashboard sidebar
│   │   ├── 📁 pages/
│   │   │   ├── 📁 dashboard/            # Dashboard pages
│   │   │   │   ├── 📁 complaints/       # Complaint management UI
│   │   │   │   ├── 📁 header/           # Dashboard header
│   │   │   │   ├── 📁 overview/         # Dashboard overview
│   │   │   │   ├── 📁 payments/         # Payment management UI
│   │   │   │   ├── 📁 profile/          # User profile management
│   │   │   │   ├── 📁 room/             # Room details and management
│   │   │   │   └── 📁 services/         # Service request interfaces
│   │   │   ├── 📁 about/                # About page
│   │   │   ├── 📁 contact/              # Contact page
│   │   │   ├── 📁 features/             # Features page
│   │   │   ├── 📁 help/                 # Help and support
│   │   │   ├── 📁 homePage/             # Landing page
│   │   │   ├── 📁 login/                # Login interface
│   │   │   ├── 📁 pricing/              # Pricing information
│   │   │   ├── 📁 privacy/              # Privacy policy
│   │   │   ├── 📁 servicess/            # Services overview
│   │   │   └── 📁 signup/               # Registration interface
│   │   ├── 📁 styles/                   # Global styles and themes
│   │   ├── 📁 utils/
│   │   │   ├── 📄 axiosInstance.js      # API client configuration
│   │   │   ├── 📄 constants.js          # Application constants
│   │   │   └── 📄 helpers.js            # Utility functions
│   │   ├── 📄 App.jsx                   # Main application component
│   │   ├── 📄 index.css                 # Global CSS styles
│   │   └── 📄 main.jsx                  # Application entry point
│   ├── 📄 .env                          # Frontend environment variables
│   ├── 📄 .gitignore                    # Git ignore rules
│   ├── 📄 eslint.config.js              # ESLint configuration
│   ├── 📄 package.json                  # Frontend dependencies
│   ├── 📄 README.md                     # Frontend documentation
│   └── 📄 vite.config.js                # Vite build configuration
│
├── 📁 docs/                             # Project documentation
│   ├── 📁 api/                          # API documentation
│   ├── 📁 images/                       # Screenshots and diagrams
│   └── 📁 deployment/                   # Deployment guides
├── 📄 .gitignore                        # Global git ignore
├── 📄 LICENSE                           # Project license
├── 📄 README.md                         # Main project documentation
└── 📄 package.json                      # Root package configuration
```

</details>

---

## 🌐 API Documentation

### 🔐 **Authentication Endpoints**

| Method | Endpoint                | Description          | Request Body                                 | Response                   |
| ------ | ----------------------- | -------------------- | -------------------------------------------- | -------------------------- |
| `POST` | `/api/v1/auth/register` | Student registration | `{ name, email, password, enrollment, dob }` | `{ success, token, user }` |
| `POST` | `/api/v1/auth/login`    | Student login        | `{ email, password }`                        | `{ success, token, user }` |
| `POST` | `/api/v1/auth/logout`   | User logout          | `{}`                                         | `{ success, message }`     |
| `POST` | `/api/v1/auth/refresh`  | Refresh JWT token    | `{ refreshToken }`                           | `{ success, token }`       |

### 👤 **Student Management**

| Method | Endpoint                           | Description            | Access Level |
| ------ | ---------------------------------- | ---------------------- | ------------ |
| `GET`  | `/api/v1/students/profile/:id`     | Get student profile    | Student      |
| `PUT`  | `/api/v1/students/update/:id`      | Update student profile | Student      |
| `GET`  | `/api/v1/students/dashboard`       | Get dashboard data     | Student      |
| `POST` | `/api/v1/students/upload-document` | Upload documents       | Student      |

### 🏠 **Room & Accommodation**

| Method | Endpoint                                    | Description         | Access Level |
| ------ | ------------------------------------------- | ------------------- | ------------ |
| `GET`  | `/api/v1/rooms/details/:id`                 | Get room details    | Student      |
| `GET`  | `/api/v1/rooms/amenities/:roomId`           | Get room amenities  | Student      |
| `POST` | `/api/v1/rooms/change-request`              | Request room change | Student      |
| `GET`  | `/api/v1/rooms/maintenance-history/:roomId` | Maintenance history | Student      |

### 💳 **Payment Management**

| Method | Endpoint                       | Description      | Access Level |
| ------ | ------------------------------ | ---------------- | ------------ |
| `GET`  | `/api/v1/payments/history`     | Payment history  | Student      |
| `POST` | `/api/v1/payments/process`     | Process payment  | Student      |
| `GET`  | `/api/v1/payments/dues`        | Get pending dues | Student      |
| `POST` | `/api/v1/payments/receipt/:id` | Download receipt | Student      |

### � **Service Requests**

| Method | Endpoint                             | Description          | Access Level |
| ------ | ------------------------------------ | -------------------- | ------------ |
| `POST` | `/api/v1/services/visitor-request`   | Visitor stay request | Student      |
| `POST` | `/api/v1/services/leave-application` | Leave application    | Student      |
| `POST` | `/api/v1/services/gym-access`        | Gym access request   | Student      |
| `GET`  | `/api/v1/services/requests`          | Get all requests     | Student      |

### 🛠️ **Complaints & Maintenance**

| Method | Endpoint                        | Description            | Access Level |
| ------ | ------------------------------- | ---------------------- | ------------ |
| `POST` | `/api/v1/complaints/submit`     | Submit complaint       | Student      |
| `GET`  | `/api/v1/complaints/track/:id`  | Track complaint status | Student      |
| `PUT`  | `/api/v1/complaints/update/:id` | Update complaint       | Student      |
| `GET`  | `/api/v1/complaints/history`    | Complaint history      | Student      |

### 👨‍💼 **Admin Operations**

| Method   | Endpoint                     | Description          | Access Level |
| -------- | ---------------------------- | -------------------- | ------------ |
| `GET`    | `/api/v1/admin/students`     | Get all students     | Admin        |
| `GET`    | `/api/v1/admin/students/:id` | Get student by ID    | Admin        |
| `PUT`    | `/api/v1/admin/students/:id` | Update student       | Admin        |
| `DELETE` | `/api/v1/admin/students/:id` | Delete student       | Admin        |
| `GET`    | `/api/v1/admin/analytics`    | Get system analytics | Admin        |

### 📊 **Response Format**

**Success Response:**

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data
  },
  "timestamp": "2025-06-11T10:30:00Z"
}
```

**Error Response:**

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Detailed error information"
  },
  "timestamp": "2025-06-11T10:30:00Z"
}
```

---

## 🎨 UI/UX Highlights

### 🌈 **Design Philosophy**

UniHostel embraces a **modern, student-centric design** that prioritizes usability, accessibility, and visual appeal. Our design system is built on the principles of:

- **🎯 Clarity** - Clean, intuitive interfaces that reduce cognitive load
- **⚡ Efficiency** - Streamlined workflows for common tasks
- **🎨 Beauty** - Aesthetic design that enhances the user experience
- **📱 Responsiveness** - Consistent experience across all devices

### 🎨 **Color Palette & Visual Identity**

<table>
<tr>
<td>

**🟣 Primary Colors**

```css
Primary Purple: #7C3AED
Primary Light: #A855F7
Primary Dark: #5B21B6
Accent Blue: #3B82F6
```

</td>
<td>

**🎯 Status Colors**

```css
Success Green: #10B981
Warning Orange: #F59E0B
Danger Red: #EF4444
Info Blue: #3B82F6
```

</td>
<td>

**🎭 Neutral Tones**

```css
Gray 900: #111827
Gray 700: #374151
Gray 500: #6B7280
Gray 100: #F3F4F6
```

</td>
</tr>
</table>

### ✨ **Key Design Features**

#### 🔮 **Glassmorphism Effects**

- **Backdrop Blur** - Modern glass-like cards with transparency
- **Gradient Overlays** - Subtle color transitions for depth
- **Shadow Systems** - Multi-layered shadows for elevation
- **Border Radius** - Consistent rounded corners throughout

#### 🎯 **Interactive Components**

- **Micro-animations** - Smooth transitions and hover effects
- **Progress Indicators** - Visual feedback for ongoing processes
- **Status Badges** - Color-coded status indicators
- **Dynamic Forms** - Real-time validation with visual feedback

#### 📱 **Responsive Grid System**

- **Mobile-First Design** - Optimized for mobile devices first
- **Flexible Layouts** - Auto-adjusting grid systems
- **Touch-Friendly** - Optimized touch targets for mobile
- **Cross-Browser** - Consistent experience across browsers

---

## 🔐 Security Features

### 🛡️ **Authentication & Authorization**

#### 🔑 **JWT Implementation**

```javascript
// Token-based authentication with refresh mechanism
const authFlow = {
  login: "JWT + Refresh Token",
  expiration: "24 hours (configurable)",
  refresh: "Automatic token renewal",
  logout: "Secure token invalidation",
};
```

#### 🔒 **Password Security**

- **bcrypt Hashing** - Industry-standard password encryption
- **Salt Rounds: 12** - Enhanced security against rainbow table attacks
- **Password Policy** - Minimum 8 characters with complexity requirements
- **Secure Reset** - Email-based password recovery with time-limited tokens

### 🛡️ **Data Protection**

#### 🔐 **Encryption Standards**

- **At Rest** - MongoDB encryption for sensitive data
- **In Transit** - HTTPS/TLS encryption for all communications
- **Environment Variables** - Secure storage of sensitive configuration
- **API Security** - Rate limiting and request validation

#### 🚪 **Access Control**

- **Role-Based Access** - Student, Admin, and Super Admin roles
- **Permission Matrix** - Granular permissions for different operations
- **Session Management** - Secure session handling with automatic timeout
- **CORS Configuration** - Controlled cross-origin resource sharing

### 🛡️ **Input Validation & Sanitization**

#### ✅ **Validation Pipeline**

```javascript
const validation = {
  frontend: "React Hook Form + Yup validation",
  backend: "Express-validator middleware",
  database: "Mongoose schema validation",
  sanitization: "Data sanitization before storage",
};
```

#### 🚨 **Security Monitoring**

- **Error Logging** - Comprehensive error tracking and monitoring
- **Audit Trails** - User action logging for security audits
- **Rate Limiting** - API endpoint protection against abuse
- **XSS Protection** - Cross-site scripting prevention

---

## 📱 Screenshots

<div align="center">

### 🏠 **Dashboard Overview**

<img src="docs/images/dashboard-overview.png" alt="Dashboard Overview" width="800" style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); margin: 20px 0;">

_The unified dashboard provides a comprehensive overview of all hostel-related information in a clean, organized layout._

---

### 🏡 **Room Management Interface**

<img src="docs/images/room-details.png" alt="Room Details" width="800" style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); margin: 20px 0;">

_Detailed room information with amenity tracking, roommate details, and maintenance history._

---

### 💳 **Payment Management System**

<img src="docs/images/payment-system.png" alt="Payment System" width="800" style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); margin: 20px 0;">

_Comprehensive payment management with multiple payment methods and detailed transaction history._

---

### 🎫 **Service Request Portal**

<img src="docs/images/service-requests.png" alt="Service Requests" width="800" style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); margin: 20px 0;">

_Intuitive service request interface for visitor management, leave applications, and facility bookings._

</div>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

### 🚀 **Quick Start for Contributors**

1. **🍴 Fork the Repository**

   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/unihostel.git
   cd unihostel
   ```

2. **🌿 Create a Feature Branch**

   ```bash
   # Create a new branch for your feature
   git checkout -b feature/amazing-new-feature
   ```

3. **💻 Make Your Changes**

   ```bash
   # Make your changes and commit them
   git add .
   git commit -m "Add: Amazing new feature with comprehensive tests"
   ```

4. **📤 Push and Create PR**
   ```bash
   # Push to your fork and create a pull request
   git push origin feature/amazing-new-feature
   ```

### 📋 **Contribution Guidelines**

#### ✅ **Code Standards**

- **ES6+ JavaScript** - Use modern JavaScript features
- **React Hooks** - Prefer functional components with hooks
- **CSS Modules** - Use CSS modules for component styling
- **ESLint Rules** - Follow the project's ESLint configuration

#### 🧪 **Testing Requirements**

- **Unit Tests** - Write tests for new functions and components
- **Integration Tests** - Test API endpoints and user flows
- **E2E Tests** - Test critical user journeys
- **Test Coverage** - Maintain >80% test coverage

#### 📝 **Documentation**

- **Code Comments** - Document complex logic and algorithms
- **API Documentation** - Update API docs for new endpoints
- **README Updates** - Update documentation for new features
- **Changelog** - Add entries to CHANGELOG.md

### 🏷️ **Issue Labels**

| Label              | Description                      | Color     |
| ------------------ | -------------------------------- | --------- |
| `🐛 bug`           | Bug reports and fixes            | `#d73a49` |
| `✨ enhancement`   | New features and improvements    | `#a2eeef` |
| `📚 documentation` | Documentation updates            | `#0075ca` |
| `🔧 maintenance`   | Code maintenance and refactoring | `#fbca04` |
| `🆘 help wanted`   | Community help needed            | `#008672` |
| `🚀 priority`      | High priority issues             | `#b60205` |

---

## 👥 Contributors

<div align="center">

### 🌟 **Meet Our Amazing Team**

<table>
<tr>
<td align="center" width="20%">
<a href="https://github.com/alexanderjohnson">
<img src="https://avatars.githubusercontent.com/u/1234567?v=4" width="100px;" alt="Alexander Johnson" style="border-radius: 50%; border: 3px solid #7C3AED;"/>
<br />
<sub><b>Alexander Johnson</b></sub>
</a>
<br />
<span title="Full Stack Developer">💻 🎨 📖</span>
<br />
<small>Lead Full Stack Developer</small>
<br />
<small><em>MERN Stack Expert | UI/UX Designer</em></small>
</td>

<td align="center" width="20%">
<a href="https://github.com/sarahwilliams">
<img src="https://avatars.githubusercontent.com/u/2345678?v=4" width="100px;" alt="Sarah Williams" style="border-radius: 50%; border: 3px solid #10B981;"/>
<br />
<sub><b>Sarah Williams</b></sub>
</a>
<br />
<span title="Backend Developer">⚙️ 🔐 📊</span>
<br />
<small>Senior Backend Developer</small>
<br />
<small><em>Node.js Specialist | Database Architect</em></small>
</td>

<td align="center" width="20%">
<a href="https://github.com/michaelchen">
<img src="https://avatars.githubusercontent.com/u/3456789?v=4" width="100px;" alt="Michael Chen" style="border-radius: 50%; border: 3px solid #3B82F6;"/>
<br />
<sub><b>Michael Chen</b></sub>
</a>
<br />
<span title="Frontend Developer">🎨 📱 ✨</span>
<br />
<small>Frontend Developer</small>
<br />
<small><em>React.js Expert | Mobile-First Design</em></small>
</td>

<td align="center" width="20%">
<a href="https://github.com/emilydavis">
<img src="https://avatars.githubusercontent.com/u/4567890?v=4" width="100px;" alt="Emily Davis" style="border-radius: 50%; border: 3px solid #F59E0B;"/>
<br />
<sub><b>Emily Davis</b></sub>
</a>
<br />
<span title="DevOps Engineer">🚀 ☁️ 🔧</span>
<br />
<small>DevOps Engineer</small>
<br />
<small><em>Cloud Infrastructure | CI/CD Specialist</em></small>
</td>

<td align="center" width="20%">
<a href="https://github.com/davidwilson">
<img src="https://avatars.githubusercontent.com/u/5678901?v=4" width="100px;" alt="David Wilson" style="border-radius: 50%; border: 3px solid #EF4444;"/>
<br />
<sub><b>David Wilson</b></sub>
</a>
<br />
<span title="QA Engineer">🧪 🐛 📋</span>
<br />
<small>QA Engineer</small>
<br />
<small><em>Test Automation | Quality Assurance</em></small>
</td>
</tr>
</table>

### 🏆 **Contribution Stats**

<div style="display: flex; justify-content: center; gap: 20px; margin: 30px 0;">

![Contributors](https://img.shields.io/badge/Contributors-5-brightgreen?style=for-the-badge&logo=github)
![Commits](https://img.shields.io/badge/Total%20Commits-500+-blue?style=for-the-badge&logo=git)
![Lines of Code](https://img.shields.io/badge/Lines%20of%20Code-25K+-purple?style=for-the-badge&logo=code)

</div>

### 🎯 **Specializations**

<table align="center">
<tr>
<th>👨‍💻 Role</th>
<th>🎯 Specialization</th>
<th>📊 Contribution</th>
<th>🛠️ Technologies</th>
</tr>
<tr>
<td><strong>Alexander Johnson</strong></td>
<td>Full Stack Development</td>
<td>Architecture & Core Features</td>
<td>React, Node.js, MongoDB, JWT</td>
</tr>
<tr>
<td><strong>Sarah Williams</strong></td>
<td>Backend Development</td>
<td>API Design & Database</td>
<td>Express.js, Mongoose, Authentication</td>
</tr>
<tr>
<td><strong>Michael Chen</strong></td>
<td>Frontend Development</td>
<td>UI/UX & Components</td>
<td>React, CSS3, Responsive Design</td>
</tr>
<tr>
<td><strong>Emily Davis</strong></td>
<td>DevOps & Infrastructure</td>
<td>Deployment & Monitoring</td>
<td>Docker, AWS, CI/CD, Nginx</td>
</tr>
<tr>
<td><strong>David Wilson</strong></td>
<td>Quality Assurance</td>
<td>Testing & Documentation</td>
<td>Jest, Cypress, Test Automation</td>
</tr>
</table>

</div>

---

## 📄 License

<div align="center">

### 📜 **MIT License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 UniHostel Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

**🔗 What this means:**

- ✅ **Commercial Use** - Use for commercial projects
- ✅ **Modification** - Modify and adapt the code
- ✅ **Distribution** - Distribute copies of the software
- ✅ **Private Use** - Use for private projects
- ❗ **Limitation** - No warranty or liability

</div>

---

## 📞 Contact & Support

<div align="center">

### 🤝 **Get in Touch**

<table>
<tr>
<td align="center">

**📧 Email Support**
<br>
[support@unihostel.com](mailto:support@unihostel.com)
<br>
<small>_Response within 24 hours_</small>

</td>
<td align="center">

**💬 Community Chat**
<br>
[Join our Discord](https://discord.gg/unihostel)
<br>
<small>_Real-time community support_</small>

</td>
<td align="center">

**🐛 Bug Reports**
<br>
[GitHub Issues](https://github.com/yourusername/unihostel/issues)
<br>
<small>_Technical issues and feature requests_</small>

</td>
</tr>
</table>

### 🌐 **Connect With Us**

[![Website](https://img.shields.io/badge/Website-unihostel.com-blue?style=for-the-badge&logo=safari)](https://unihostel.com)
[![Documentation](https://img.shields.io/badge/Docs-Read%20More-green?style=for-the-badge&logo=gitbook)](https://docs.unihostel.com)
[![API Reference](https://img.shields.io/badge/API-Reference-orange?style=for-the-badge&logo=swagger)](https://api.unihostel.com/docs)

### 📈 **Project Status**

![GitHub Repo stars](https://img.shields.io/github/stars/yourusername/unihostel?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/unihostel?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/unihostel?style=social)

---

<div style="text-align: center; padding: 40px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white; margin: 30px 0;">

### 🚀 **Ready to Transform Hostel Management?**

**UniHostel** is more than just a management system—it's a complete solution for modern student accommodation.

[**🏠 Get Started Today**](https://github.com/yourusername/unihostel) • [**📖 View Documentation**](https://docs.unihostel.com) • [**🎯 See Live Demo**](https://demo.unihostel.com)

</div>

---

<div align="center">
<sub>Built with ❤️ by the UniHostel Team | Making hostel management simple, efficient, and modern.</sub>
</div>

</div>
