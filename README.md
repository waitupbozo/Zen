# Zen

Zen is a modern, AI-powered mental wellness platform built with React and Vite. It offers personalized assessments, guided activities, expert resources, and progress tracking to help users on their mental health journey.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)
- [Folder & File Overview](#folder--file-overview)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **AI/ML Assessments:** Personalized mental health analysis.
- **Guided Activities:** Mindfulness, gratitude journaling, meditation, and more.
- **Expert Resources:** Health tips, Q&A, emergency contacts, and chatbot.
- **Progress Tracking:** Visual dashboards and achievement badges.
- **Responsive UI:** Modern, mobile-friendly design with Tailwind CSS.

---

## Project Structure

```
zen/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── avatars/
├── src/
│   ├── Affirmation.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── ArtTherapy.jsx
│   ├── Assessment.jsx
│   ├── AuthContext.jsx
│   ├── Badge.jsx
│   ├── Breath.jsx
│   ├── ChatAvatar.jsx
│   ├── Chatbot.jsx
│   ├── CognitiveRestructuring.jsx
│   ├── Dashboard.jsx
│   ├── Dcard.css
│   ├── Dcard.jsx
│   ├── Emergency.css
│   ├── Emergency.jsx
│   ├── GratitudeJournaling.jsx
│   ├── GuidedMeditation.jsx
│   ├── GuidedPath.jsx
│   ├── HealthTips.jsx
│   ├── index.css
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── main.jsx
│   ├── NatureWalk.jsx
│   ├── Navbar.jsx
│   ├── PhysicalActivity.jsx
│   ├── Profile.jsx
│   ├── ProgressTracking.jsx
│   ├── ProgressiveMuscleRelaxation.jsx
│   ├── Qna.jsx
│   ├── sentiment.jsx
│   ├── SignUp.jsx
│   ├── SocialConnection.jsx
│   ├── SupportResources.css
│   ├── SupportResources.jsx
│   ├── task.jsx
│   └── VideoLibrary.jsx
```

---

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/zen.git
   cd zen
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---

## Running the App

- **Development mode:**
  ```sh
  npm run dev
  ```
  Open [http://localhost:5173](http://localhost:5173) in your browser.

- **Production build:**
  ```sh
  npm run build
  ```

- **Preview production build:**
  ```sh
  npm run preview
  ```

- **Lint the code:**
  ```sh
  npm run lint
  ```

---

## Folder & File Overview

### Root Files

- **index.html**: Main HTML entry point.
- **package.json**: Project metadata and scripts.
- **vite.config.js**: Vite configuration.
- **tailwind.config.js**: Tailwind CSS setup.
- **postcss.config.js**: PostCSS plugins.
- **eslint.config.js**: ESLint rules.
- **README.md**: Project documentation.

### `public/`

- **avatars/**: User avatar images and assets.

### `src/`

- **App.jsx**: Main React app component.
- **main.jsx**: Entry point for ReactDOM.
- **index.css**: Global styles (Tailwind CSS).
- **Landing.jsx**: Landing page with navigation and sections.
- **Dashboard.jsx**: User dashboard with assessment and progress.
- **Profile.jsx**: User profile management.
- **SignUp.jsx / Login.jsx**: Authentication pages.
- **Navbar.jsx**: Top navigation bar.
- **SupportResources.jsx**: Hub for health tips, Q&A, emergency, and chatbot.
- **Dcard.jsx / Dcard.css**: Doctor/consultation cards and styles.
- **Qna.jsx**: Health Q&A section.
- **HealthTips.jsx**: Wellness tips.
- **Emergency.jsx / Emergency.css**: Emergency contacts and styles.
- **Chatbot.jsx / ChatAvatar.jsx**: Chatbot interface.
- **Affirmation.jsx, Breath.jsx, GuidedMeditation.jsx, NatureWalk.jsx, ArtTherapy.jsx, CognitiveRestructuring.jsx, PhysicalActivity.jsx, SocialConnection.jsx, ProgressiveMuscleRelaxation.jsx, GratitudeJournaling.jsx**: Guided activity components.
- **task.jsx**: Main task/journey logic and UI.
- **GuidedPath.jsx**: Alternative guided journey.
- **ProgressTracking.jsx**: Progress and achievements dashboard.
- **sentiment.jsx**: AI/ML assessment and analysis.
- **VideoLibrary.jsx**: Curated video content.

---
# Mental Health Support Flask App

This repository contains a Flask-based backend for a mental health support application. The app provides user authentication, scheduling, chat-based responses, machine learning predictions, and task/assessment tracking.

## Features

- **User Registration & Login:** Secure user authentication and profile management.
- **Chatbot:** Provides supportive responses to user messages.
- **Machine Learning Prediction:** Predicts user sentiment or mental health status using pre-trained models.
- **Appointment Scheduling:** Allows users to schedule appointments.
- **WhatsApp Integration:** Sends notifications via WhatsApp using Twilio.
- **Task & Assessment Tracking:** Tracks daily wellness tasks and assessment results.
- **Progress Dashboard:** Visualizes user progress, achievements, and assessment history.

## Project Structure

```
.
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── models.py
│   ├── routes.py
│   ├── utils.py
│   └── ...
├── ml_models/
│   ├── label_encoder.pkl
│   ├── logistic_regression_model.pkl
│   └── tfidf_vectorizer.pkl
├── run.py
├── requirements.txt
├── .env
```

## Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Create a virtual environment and install dependencies:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure environment variables:**
   - Copy `.env` and update with your own secret keys and credentials (do not commit secrets to public repositories).

4. **Run the application:**
   ```bash
   python run.py
   ```

## Notes

- The machine learning models are stored in the `ml_models/` directory.
- The database uses SQLite by default (`users.db`).
- Twilio credentials are required for WhatsApp integration.
- Do **not** commit personal or sensitive information to public repositories.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE) or as specified in your repository.

---

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Chart.js](https://www.chartjs.org/)
- [Recharts](https://recharts.org/)
- [DiceBear Avatars](https://avatars.dicebear.com/)
