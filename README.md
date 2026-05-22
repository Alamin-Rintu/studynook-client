# 📚 StudyNook

StudyNook is a full-stack study room booking platform where students and library users can discover, manage, and reserve study spaces with ease. Users can list rooms they control, browse available rooms, search and filter by preferences, and securely book rooms for specific dates and time slots.

The platform includes smart time-conflict detection to prevent double-booking, secure JWT authentication using HTTP-only cookies, and a responsive recruiter-friendly UI for all devices.

---

## 🚀 Live Demo

🔗 Live Site: [Add Your Live URL Here]  
🔗 Client Repository: [Add Client Repo Link]  
🔗 Server Repository: [Add Server Repo Link]

---

# ✨ Features

## 👤 Authentication & Security
- Secure JWT authentication
- HTTP-only cookie-based token storage
- Protected private routes
- User login & registration system

## 📖 Study Room Management
- Add new study room listings
- Edit and update room information
- Delete room listings
- Room owner dashboard management

## 🔍 Search & Filtering
- Search rooms by name
- Filter rooms by availability or category
- Responsive and fast browsing experience

## 📅 Smart Booking System
- Book rooms for specific dates
- Select available time slots
- Automatic time conflict detection
- Prevents double-booking

## 📊 User Dashboard
- View personal bookings
- Manage created room listings
- Update booking information
- Delete or cancel bookings

## 🎨 UI & UX
- Fully responsive design
- Mobile, tablet, and desktop support
- Clean modern interface
- Recruiter-friendly project structure

---

# 🛠️ Tech Stack

## Frontend
- Next.js / React.js
- Tailwind CSS
- HeroUI / ShadCN UI
- React Hot Toast
- Swiper.js

## Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Cookie Parser

---

# 📂 Project Structure

```bash
StudyNook/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   └── styles/
│
├── server/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── models/
│   └── utils/
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/studynook.git
```

---

## 2️⃣ Install Dependencies

### Client

```bash
cd client
npm install
```

### Server

```bash
cd server
npm install
```

---

## 3️⃣ Environment Variables

Create a `.env` file in both client and server folders.

### Client `.env`

```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Server `.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLIENT_URL=your_client_url
```

---

## 4️⃣ Run the Project

### Start Client

```bash
npm run dev
```

### Start Server

```bash
npm start
```

---

# 🔐 Authentication Flow

- User logs in/registers
- JWT token is generated
- Token is stored in HTTP-only cookies
- Protected routes verify authentication
- Secure access to dashboards and booking features

---

# 📱 Responsive Design

StudyNook is optimized for:
- 📱 Mobile Devices
- 💻 Laptops
- 🖥️ Desktop Screens
- 📲 Tablets

---

# 🎯 Main Functionalities

| Feature | Description |
|---|---|
| Room Listing | Users can create and manage study rooms |
| Smart Booking | Prevents overlapping reservations |
| Search & Filter | Quickly find available study spaces |
| Dashboard | Manage bookings and room listings |
| Authentication | Secure JWT login system |

---

# 🌟 Future Improvements

- Real-time booking updates
- Email notifications
- Admin dashboard
- Room reviews & ratings
- Payment integration
- Calendar integration

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Push your branch  
5. Open a pull request  

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by **[Your Name]**

If you like this project, give it a ⭐ on GitHub!