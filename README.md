# Student Speaking Assessment Report (Full Stack Project)

This project is a **Student Speaking Assessment Report Page** inspired by platforms such as SpeechAce and IELTS score reports.  
It is built as a **functional prototype** to demonstrate frontend UI/UX skills, backend data handling, and logical feedback generation.

The application displays a student’s speaking performance across **multiple English proficiency exams** with dynamic tabs, charts, and descriptive feedback.

---

## 🚀 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Chart.js (Radar Chart)
- JavaScript (ES6)

### Backend

- Node.js
- Express.js
- In-memory JSON data (no database)

---

## 📁 Project Structure

```
student-assessment-report/
├── backend/
│   ├── data.js          # All exam scores & student data
│   ├── server.js        # Express API
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── Header.jsx
│   │   │   ├── report/
│   │   │   │   ├── CandidateInfo.jsx
│   │   │   │   ├── ScoreTabs.jsx
│   │   │   │   ├── SummaryPanel.jsx
│   │   │   │   ├── SkillScores.jsx
│   │   │   │   ├── ScoreChart.jsx
│   │   │   │   └── Feedback.jsx
│   │   │   └── ScoreSummary.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html       # Main HTML file
│   ├── package.json     # Frontend dependencies
│   ├── vite.config.js   # Vite configuration
│   ├── eslint.config.js # ESLint configuration
└── README.md            # Project documentation
```

This structure follows **real-world React application architecture**, separating layout, report logic, and reusable components.

---

## ▶️ How to Run the Project

### 1️⃣ Run Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```bash
http://localhost:5000
```

API Endpoint:

```bash
GET /api/report
```

### 2️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

To access the application.

## 📊 Where the Scores Are Stored

All student and exam scores are stored in:

```bash
backend/data.js
```

### Stored Data Includes:

- Student Name
- Multiple Exams: Speechace, CEFR, IELTS, PTE, TOEFL

For each exam:

- Overall score
- Skill-wise scores: Pronunciation, Fluency, Vocabulary, Grammar

### Example Data Structure:

```js
exams: {
  IELTS: {
    overall: 8.3,
    skills: {
      pronunciation: 7.8,
      fluency: 8.3,
      vocabulary: 7.2,
      grammar: 8.9
    }
  }
}
```

No database is used, as per assignment requirements.

## 🧠 How Feedback Logic Works

The Descriptive Feedback section is fully dynamic and updates based on:

- Selected exam (Speechace / CEFR / IELTS / PTE / TOEFL)
- Overall score
- Weakest skill area

### Feedback Logic Flow:

1. Detect the currently active exam
2. Identify the lowest scoring skill
3. Apply exam-specific feedback rules
4. Generate long, human-readable guidance

### Example Logic:

```js
const weakestSkill = Object.entries(skills).sort((a, b) => a[1] - b[1])[0][0];
```

Each exam has its own feedback style, closely matching how real language assessment platforms evaluate candidates.  
Feedback clearly explains:

- Strengths
- Weak areas
- What the user should focus on to improve

## 🎨 UI & UX Highlights

- SpeechAce-inspired professional layout (not copied)
- Functional tabs for multiple exams
- Clean score badge and skill progress bars
- Radar chart for visual score analysis
- Tailwind CSS for consistent and responsive design
- Mobile-friendly and clean report-style layout

## ❌ Not Included (As Per Assignment)

- Authentication
- Database
- Admin panel
- AI / ML features
- Deployment

## ✅ Purpose of the Project

This project is designed to demonstrate:

- Frontend UI/UX skills
- Component-based React architecture
- Backend API handling
- Logical feedback generation
- Clean and maintainable code structure

It is a prototype, not a production-ready system.

## 👤 Student Information

**Name:** Raghav Gupta  
**Role:** Full Stack Developer (React + Node.js)

## 📌 Final Notes

Partial completion was acceptable as per assignment guidelines, but this project includes:

- Multi-exam score support
- Dynamic descriptive feedback
- Graphical score representation
- Clean and professional architecture

Thank you for reviewing this project.

---

If you want next, I can:

- ✅ Prepare **Internshala submission message**
- ✅ Do **final UI/UX polish checklist**
- ✅ Do **interviewer-style explanation**

Just tell me what’s next 🚀
