# 🌍 WanderLust

<div align="center">

**Your gateway to extraordinary travel experiences around the world**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.0.4-000000?style=for-the-badge)](https://heroui.com/)

*A modern, responsive travel booking platform built with cutting-edge web technologies*

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

</div>

---

## ✨ Features

### 🏠 **Homepage**
- **Hero Banner**: Stunning full-screen banner with call-to-action buttons
- **Search Interface**: Interactive search bar with location, date/duration, budget, and people filters
- **Responsive Design**: Optimized for all device sizes

### 🗺️ **Destinations**
- **Dynamic Routing**: Individual destination pages with detailed information
- **Destination Management**: View and explore travel packages

### ➕ **Add Destination**
- **Admin Interface**: Form to add new travel packages
- **Rich Form Fields**: Name, description, location, image, price, rating, highlights
- **Category Selection**: Predefined categories (Beach, Mountain, City, Adventure, Cultural, Luxury)
- **Backend Integration**: API calls to manage destination data

### 🎨 **UI/UX Components**
- **Modern Navigation**: Responsive navbar with mobile hamburger menu
- **Footer**: Comprehensive footer with newsletter signup
- **Consistent Design**: Clean, modern interface with Tailwind CSS
- **Interactive Elements**: Hover effects, transitions, and animations

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 16.2.6** - The React framework for production
- **React 19.2.4** - A JavaScript library for building user interfaces
- **App Router** - Next.js file-based routing system

### **Styling & UI**
- **Tailwind CSS v4** - A utility-first CSS framework
- **HeroUI 3.0.4** - Beautiful and modern React components
- **Lucide React** - Beautiful & consistent icon toolkit

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Babel Plugin React Compiler** - React compiler for better performance
- **PostCSS** - CSS processing tool

### **Backend Integration**
- **REST API** - Connected to backend server (localhost:5000)
- **FormData & JSON** - Data handling for destination management

---

## 📁 Project Structure

```
wanderlust/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── add-destination/    # Add destination page
│   │   │   └── page.jsx
│   │   ├── destinations/       # Destinations listing
│   │   │   └── [id]/          # Dynamic destination pages
│   │   │       └── page.jsx
│   │   ├── globals.css         # Global styles
│   │   ├── layout.js           # Root layout
│   │   ├── not-found.jsx       # 404 page
│   │   └── page.js             # Homepage
│   └── components/             # Reusable components
│       ├── Banner.jsx          # Hero banner component
│       ├── Footer.jsx          # Footer component
│       └── Navbar.jsx          # Navigation component
├── public/
│   └── assets/                 # Static assets
│       └── destinations/       # Destination images
├── package.json                # Dependencies and scripts
├── next.config.mjs            # Next.js configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
└── eslint.config.mjs          # ESLint configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Backend server** running on `localhost:5000` (for full functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

---

## 🎯 Key Components

### **Banner Component**
- Full-screen hero section with background image
- Interactive search interface
- Responsive button layout

### **Add Destination Form**
- Client-side form validation
- Dynamic highlights management
- Category selection dropdown
- API integration for data submission

### **Navigation**
- Responsive design with mobile menu
- Active link highlighting
- Smooth transitions

### **Footer**
- Newsletter subscription
- Multi-column layout
- Social media links placeholder

---

## 🔧 Configuration

### **Environment Variables**
Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### **Tailwind CSS**
The project uses Tailwind CSS v4 with custom configuration in `tailwind.config.mjs`.

### **ESLint**
Code linting is configured in `eslint.config.mjs` with Next.js recommended rules.

---

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

---

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Booking system integration
- [ ] Payment gateway
- [ ] Review and rating system
- [ ] Advanced search filters
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Multi-language support

---

## 📄 License

This project is private and proprietary.

---

<div align="center">


[⬆️ Back to Top](#-wanderlust)

</div>