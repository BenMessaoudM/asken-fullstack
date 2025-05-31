# ASKEN Fullstack Website

This is the official fullstack web application for **ASKEN** — the Arcada Student Union. It’s designed to handle public-facing content such as info pages, board profiles, booking calendar, membership benefits, and secure contact forms (including anti-harassment reports).

---

## 🚀 Technologies Used

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: GitHub + Vercel/Render (planned)

---

## 📁 Project Structure

asken-fullstack/
├── frontend/ # React app
│ ├── public/ # Images, icons
│ ├── src/
│ │ ├── pages/ # Info, Board, Booking, Contact, etc.
│ │ ├── components/ # Navbar, Cards, Forms
│ │ ├── styles/ # Custom CSS
│ └── ...
├── backend/ # Express API
│ ├── api/ # Contact, booking, and future endpoints
│ ├── models/ # MongoDB schemas
│ ├── server.js # API logic & routes
│ ├── .env # Local environment variables

---

## ✅ Main Features

- 📄 **Info Page** — Static info about ASKEN
- 👥 **Board Page** — Carousel of board members with flip animations, contact info
- 📬 **Contact Form** — Send messages to either general or anti-harassment inbox
- 🏠 **Booking Page** — Book the Cor-house (admin logic in progress)
- 🎟 **Membership Page** — Info only, registration handled via Kide.app

---

## 🔐 Contact Form Logic

- Sends email based on selected reason:
  - **General** → `info@asken.fi`
  - **Anti-Harassment** → `hello@asken.fi`, `jessica@asken.fi`, `frej@asken.fi`

---

## 🔄 Next Features

- Booking admin panel (CRUD)
- Email integration (e.g., Nodemailer with SMTP or SendGrid)
- Swedish translation layer
- Live deployment (Vercel/Render)

---

## 👨‍💻 Developed By

**Mustapha Ben Messaoud (Musse)**  
Vice Chairperson, Arcada Student Union (ASKEN)  
Email: `musse@asken.fi`

---

## 📌 Notes

> Members register via Kide.app  
> Booking data will be stored in MongoDB  
> No WordPress is used — full custom stack  
