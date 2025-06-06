
# Tindog

## Tech Stack
- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Deployment:**  
  - Frontend: Vercel  
  - Backend: Render  

## Setup Instructions

### Backend Setup
1. Clone the repository and navigate to the backend folder (e.g., `server`).
2. Create a `.env` file in the backend root directory and add the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
FRONTEND_URL=https://tindog2-sigma.vercel.app
```

3. Install dependencies and start the server:
```bash
npm install
npm start
```

### Frontend Setup
1. Navigate to the frontend folder (e.g., `client`).
2. Create a `.env` file and add the API base URL:

```
REACT_APP_API_BASE_URL=https://tindog2-blej.onrender.com/api
```

3. Install dependencies and start the frontend:

```bash
npm install
npm start
```

## Features Implemented
- User registration and login with JWT authentication
- Secure API calls using Axios interceptors with token authorization
- Backend API routes with proper CORS configuration
- Responsive and user-friendly frontend interface
- Deployment on Render (backend) and Vercel (frontend)

## Notes on Enhancements / Bonus Features
- Environment variables are used for secure configuration of sensitive data
- Axios interceptors automatically attach JWT tokens in requests
- CORS configured to allow frontend URL only for security
- Proper error handling and token-based authentication flow
- Deployed on scalable and reliable cloud platforms (Render and Vercel)
- Responsive UI optimized for different screen sizes

---

## Live Demo
Frontend: [https://tindog2-sigma.vercel.app](https://tindog2-sigma.vercel.app)  
Backend API: [https://tindog2-blej.onrender.com/api](https://tindog2-blej.onrender.com/api)  

---

## Author
Nikhil
