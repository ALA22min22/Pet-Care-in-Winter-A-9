# 🐾 WarmPaws – Pet Care in Winter

**WarmPaws** is a cozy, winter-themed Single Page Application (SPA) designed to help pet owners ensure their furry friends stay warm and healthy during the cold season. From professional winter grooming to custom coat fittings, WarmPaws provides a one-stop platform for all winter pet care needs.

### 🔗 [Live Site Link](https://pet-care-in-winter-61597.web.app) | [GitHub Repository](https://github.com/ALA22min22/Pet-Care-in-Winter-A-9.git)

---

## 🖼️ Screenshot
![WarmPaws Homepage](https://i.ibb.co.com/KjhDyGjq/pet-care-in-winter-61597-web-app-1.png)


---

## 📖 Project Overview
WarmPaws focuses on a minimalist and modern design, providing a seamless user experience. The application allows users to explore various pet care services, book them via a secure portal, and manage their personal profiles. It is built using **React** and secured with **Firebase Authentication**, ensuring that pet data and bookings are handled safely.

---

## 🌟 Core Features
* **❄️ Winter-Themed Hero Slider:** A beautiful, responsive carousel using **Swiper.js** showcasing pets in winter outfits.
* **🐕 Dynamic Service Booking:** Users can browse 6+ unique winter services (Clothing, Grooming, Treatments) and book them through a protected details page.
* **🔐 Secure Authentication:** Complete login and signup system including **Google Social Login** and strict password validation (Uppercase, Lowercase, 6+ chars).
* **🛡️ Protected Routes:** Service details and booking features are restricted to authenticated users, with a smooth redirect logic after login.
* **👤 Profile Management:** Users can view their profile info and use the **Update Profile** feature to change their name and photo URL dynamically.
* **🔑 Password Recovery:** A functional "Forgot Password" feature that pre-fills the email and redirects users to their Gmail for password resetting.
* **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop views using Tailwind CSS and DaisyUI.
* **✨ Smooth Animations:** Subtle and approachability-focused animations powered by the **AOS (Animate On Scroll)** package.

---

## ⚙️ Main Technologies Used
* **React.js** (Vite)
* **Tailwind CSS** & **DaisyUI**
* **Firebase** (Authentication & Hosting)
* **React Router DOM** (SPA Navigation)
* **React Hot Toast** (Notifications)

---

## 📦 Key Dependencies
The following npm packages were essential in building this project:
* `firebase`: For secure authentication and hosting.
* `react-router-dom`: For handling SPA routes without reload errors.
* `swiper`: For the winter-themed hero slider.
* `aos`: For implementing smooth scroll animations.
* `react-hot-toast`: For beautiful success and error notifications.
* `react-icons`: For the password toggle (eye icon) and social links.

---

## 💻 Step-by-Step Guide to Run Locally

Follow these steps to set up the project on your local machine:

**1. Clone the repository:**
> git clone https://github.com/ALA22min22/Pet-Care-in-Winter-A-9.git

**2. Navigate to the project directory:**
> cd WarmPaws-client

**3. Install dependencies:**
> npm install

**4. Set up Environment Variables:**
Create a `.env.local` file in the root folder and add your Firebase configurations:
> VITE_apiKey=your_firebase_api_key  <br>
> VITE_authDomain=your_project.firebaseapp.com  <br>
> VITE_projectId=your_project_id  <br>
> VITE_storageBucket=your_project.appspot.com  <br>
> VITE_messagingSenderId=your_sender_id  <br>
> VITE_appId=your_app_id <br>

**5. Start the development server:**
> npm run dev

---

## 🔗 Resources
* **Live Site:** [warmpaws-petcare.web.app](https://pet-care-in-winter-61597.web.app)
* **React Docs:** [react.dev](https://react.dev/)
* **AOS Documentation:** [michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)

---

<h3 align="center">📫 Connect with Me</h3>
<div align="center">
  <a href="https://www.linkedin.com/in/md-alamin-dev" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://github.com/ALA22min22" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</div>
