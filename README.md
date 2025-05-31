# ASKEN Fullstack Website

This is the official fullstack web application for **ASK (Arcada Studentkår)** — the Student Union at Arcada University of Applied Sciences. It offers a modern digital interface for students to access information, book facilities, contact the union, and view board members and staff.

---

## 🌐 Live Preview

> Deployment coming soon on Vercel/Render

---

## 🛠️ Tech Stack

### Frontend

* **React** (with Vite)
* **CSS3** / Custom styles

### Backend

* **Node.js** with **Express**
* **MongoDB** with Mongoose

---

## 📁 Project Structure

```
asken-fullstack/
├── backend/
│   ├── api/              # API routes (booking, contact)
│   ├── models/           # MongoDB schemas
│   ├── server.js         # Express server
│   └── .env              # Environment variables
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── pages/        # Info, Contact, Board, Booking, Membership, Staff
│   │   ├── components/   # Navbar, Footer, BoardCard, etc.
│   │   └── styles/       # CSS modules
│   └── index.html        # App mount point
├── README.md
└── package.json
```

---

## 🔑 Features

* ✅ Bilingual Support (English + Swedish coming)
* 📅 Booking Calendar with time & sauna selection
* 📬 Contact Form with smart routing (anti-harassment vs general)
* 📌 Staff & Board page with photos, bilingual titles & roles
* 🎓 Membership Page with benefits, prices & Kide.app integration
* 📱 Fully responsive + Mobile friendly

---

## 📸 Screenshots




## 📦 Setup Instructions

```bash
# Clone the repo
$ git clone https://github.com/BenMessaoudM/asken-fullstack.git

# Install backend deps
$ cd asken-fullstack/backend
$ npm install

# Create a .env file
MONGO_URI=mongodb://localhost:27017/asken

# Start backend
$ npm run dev

# In another terminal, install frontend deps
$ cd ../frontend
$ npm install

# Start frontend
$ npm run dev
```

---

## 🧑‍💻 Developer Info

* 💻 Developed by [Musse (Mustapha Ben Messaoud)](https://www.linkedin.com/in/mubenmessaoud)
* 📷 Follow us on [Instagram](https://www.instagram.com/askenfi)

---

## 📄 License

MIT License — free to use, modify, and distribute for non-commercial purposes.
