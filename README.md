# ASKEN Fullstack Website

This is the official fullstack web application for **ASK (Arcada Studentkår)** — the Student Union at Arcada University of Applied Sciences. It offers a modern interface for students to access information, book facilities, contact the union, and view board members and staff. Admins can log in to view messages and bookings.

## 🌐 Live Preview
> Deployment coming soon on Vercel/Render

## 🛠️ Tech Stack

### Frontend
- **React** (with Vite)
- **React Router**
- **CSS3 / Custom styles**
- **LocalStorage** for admin session

### Backend
- **Node.js** with **Express**
- **MongoDB** with **Mongoose**

## 📁 Project Structure

```
asken-fullstack/
├── backend/
│   ├── api/              # API routes (booking, contact)
│   ├── models/           # MongoDB schemas
│   ├── server.js         # Express server
│   └── .env              # Environment variables
├── frontend/
│   ├── public/           # Static assets (e.g. board images)
│   ├── src/
│   │   ├── components/   # Navbar, Footer, etc.
│   │   ├── pages/        # Info, Contact, Booking, etc.
│   │   ├── admin/        # Admin panel components
│   │   ├── styles/       # CSS
│   │   └── App.jsx       # Main React App
│   └── index.html        # Entry point
├── README.md
└── package.json
```

## 🔑 Features

### 👥 Public
- ✅ Bilingual (English + Swedish)
- 📅 Booking Calendar with time & sauna options
- 📬 Contact Form with smart routing (anti-harassment vs general)
- 🧑‍🤝‍🧑 Staff & Board pages with photos, bilingual roles
- 🎓 Membership Page with benefits & Kide.app link
- 📱 Fully responsive and mobile-friendly

## 🛠️ Admin Panel

> Accessible at `/admin/login` (local only unless secured in production)

### 👤 Admin Features:
- 🔐 Admin login with localStorage session
- 📬 View contact messages
- 📅 View bookings
- 📊 Dashboard overview (bookings & messages)
- 🔓 Logout to end session

## 📦 Setup Instructions

```bash
# Clone the repo
$ git clone https://github.com/BenMessaoudM/asken-fullstack.git
$ cd asken-fullstack

# Backend setup
$ cd backend
$ npm install
# .env should contain:
# MONGO_URI=mongodb://localhost:27017/asken
$ npm run dev

# Frontend setup
$ cd ../frontend
$ npm install
$ npm run dev
```

Then visit:

- 🌐 `http://localhost:5173/` — public pages  
- 🔐 `http://localhost:5173/admin/login` — admin login

## 🧑‍💻 Developer Info

- 💻 Developed by [Mustapha "Musse" Ben Messaoud](https://www.linkedin.com/in/mubenmessaoud)
- 📷 Follow ASKEN on [Instagram](https://www.instagram.com/askenfi)

## 📄 License
MIT License — Free to use, modify, and distribute for non-commercial purposes.