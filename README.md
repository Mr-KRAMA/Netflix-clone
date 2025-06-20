# Netflix Clone

A fully responsive Netflix clone built with React.js, Vite, and Firebase. Browse movies and TV shows, view details, and watch trailers using data from the TMDB API. Features a modern UI, search, authentication, and a built-in video player. The app is optimized for all devices and screen sizes.

## Features

- Browse trending, popular, and top-rated movies/TV shows
- Search functionality
- View detailed information for each title
- Watch trailers via embedded YouTube player
- User authentication with Firebase (sign up, login, logout)
- Save favorite movies/shows to your profile
- Responsive design for desktop, tablet, and mobile
- Fast performance with Vite
- Clean and intuitive user interface

## Tech Stack

- React.js
- Vite
- Firebase (Authentication & Firestore)
- CSS
- TMDB API
- JavaScript

## Getting Started

1. **Clone the repository**
   ```bash
   git clone git@github.com:Mr-KRAMA/Netflix-clone.git
   cd Netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add your TMDB API key and Firebase config:
     ```
     VITE_TMDB_API_KEY=your_tmdb_api_key_here
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_firebase_app_id
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Screenshots
![home page](./src/screenshot/Screenshot%202025-06-20%20170705.png)
![home page2](./src/screenshot/Screenshot%202025-06-20%20170725.png)

## Demo

[Live Demo Coming Soon]

## License

This project is for educational purposes only and is not affiliated with Netflix.

---

**GitHub Repository:**  
[https://github.com/Mr-KRAMA/Netflix-clone](https://github.com/Mr-KRAMA/Netflix-clone)