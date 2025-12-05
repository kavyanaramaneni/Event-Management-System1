**🎫 Event Management System**
A full-stack platform for seamless event discovery, management, and secure registration.

📖 Description
The Event Management System is a robust web application built to streamline the entire event lifecycle. It serves two main roles: Organizers, who need efficiently manage event listings, and Attendees, who need a smooth discovery and checkout experience.

Unlike standard listing sites, this project implements a dedicated Cart System for temporary enrollment and distinct role-based security, ensuring a safe and intuitive user experience.

✨ Key Differentiators
🛒 Shopping Cart Logic: Users can add multiple events to a cart before a single, unified checkout.

🔒 Role-Based Access Control (RBAC): Strict separation between General Users and Admins.

⚡ Dynamic Performance: Features skeleton loading for better UX during data fetches.
🚀 Features\
**👤 For Attendees (General Users)**\
Authentication: Secure Login, Signup, and Password Reset (/changepassword).

Event Discovery: Browse events with category filtering and skeleton loading states.

Smart Search: Filter events dynamically via URL parameters.

Cart Management: Add events to a cart (with duplicate detection) before purchasing.

Secure Checkout: Integrated payment processing (Simulated/Stripe).

Dashboard: "My Events" page to view registered events and download invoices.

**🛠 For Organizers (Admins)**\
Event CRUD: Create, Read, Update, and Delete event listings.

User Management: View registered users and booking history.

**🛠️ Tech Stack**
Frontend:

React.js (Vite)

Axios (API Requests)

JS-Cookie (Session Management)

**Backend:**

1.Node.js

2.Express.js

3.JWT (JSON Web Tokens for Auth)

4.Bcrypt.js (Password Hashing)

**Database:**

MongoDB (Mongoose ODM)
⚙️ Installation & Setup
Follow these steps to get a local copy running.

Prerequisites
Node.js (LTS Version)

npm or yarn

MongoDB Local or Atlas URI

clone the repository
git clone https://github.com/yourusername/event-management-system.git\
cd event-management-system

**Backend Setup**\
cd server\
npm install

Configure Environment Variables: Create a .env file in the server/ directory:

PORT=5000\
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173

npm run dev\

**Frontend Setup**\
cd client\
npm install

npm run dev\-

**📖 Usage**\
Register: Create a new account on the /signup page.

Browse: Explore events on the home page or filter by category.

Add to Cart: Select an event and click "Add to Cart".

Checkout: Go to the Cart page and proceed to payment.

View Tickets: After success, navigate to "My Events" to see your ticket and download the invoice.\
**🗺️ Roadmap**\
Future enhancements planned for the project:

[ ] 🔔 Notifications: Email/SMS reminders for upcoming events.

[ ] 📊 Admin Analytics: Dashboard for organizers to see ticket sales data.

[ ] 📱 Mobile Responsiveness: Further optimization for small screens.

[ ] 💬 Reviews: Allow attendees to rate and review events.
