# 🚀 MERN Kanban Board Application

A modern, full-stack Kanban board application built with the MERN stack featuring drag-and-drop functionality, dark/light theme toggle, and a beautiful responsive UI.

## 📸 UI Preview

```
┌─────────────────────────────────────────────────────────┐
│  🎯 Kanban Board                          ☀️/🌙        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────┐    ┌──────────────┐    ┌──────────┐      │
│  │ To Do   │    │ In Progress  │    │ Done     │      │
│  │  [+]    │    │    [+]       │    │   [+]    │      │
│  ├─────────┤    ├──────────────┤    ├──────────┤      │
│  │ ⋮ Task 1│    │ ⋮ Task 3     │    │ ⋮ Task 5 │      │
│  │  [✏️][🗑️]│    │  [✏️][🗑️]     │    │  [✏️][🗑️] │      │
│  │         │    │              │    │          │      │
│  │ ⋮ Task 2│    │ ⋮ Task 4     │    │          │      │
│  │  [✏️][🗑️]│    │  [✏️][🗑️]     │    │          │      │
│  └─────────┘    └──────────────┘    └──────────┘      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## ✨ Features

### Frontend
- ⚡ **Vite + React + TypeScript** - Lightning fast development
- 🎨 **Tailwind CSS** - Beautiful, responsive UI
- 🌓 **Dark/Light Mode** - Persistent theme toggle
- 🎯 **Drag & Drop** - Smooth task movement with @dnd-kit
- 📱 **Fully Responsive** - Works on all devices
- 🎭 **Glassmorphism Design** - Modern aesthetic
- ✨ **Smooth Animations** - Delightful user experience
- 🔄 **Real-time Updates** - Instant API synchronization

### Backend
- 🚀 **Node.js + Express** - Robust REST API
- 🗄️ **MongoDB + Mongoose** - NoSQL database
- 🔒 **CORS Enabled** - Secure cross-origin requests
- ⚙️ **Environment Variables** - Secure configuration
- 📝 **TypeScript** - Type-safe backend code
- ✅ **Input Validation** - Data integrity

## 📁 Project Structure

```
kanban-board/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── Column.tsx
│   │   │   ├── TaskCard.tsx
│   │   │   ├── AddTaskModal.tsx
│   │   │   ├── EditTaskModal.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── EmptyState.tsx
│   │   ├── pages/
│   │   │   └── Board.tsx
│   │   ├── context/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   ├── useTheme.ts
│   │   │   └── useTasks.ts
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── constants.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── .env
└── backend/
    ├── src/
    │   ├── models/
    │   │   └── Task.ts
    │   ├── controllers/
    │   │   └── taskController.ts
    │   ├── routes/
    │   │   └── taskRoutes.ts
    │   ├── config/
    │   │   └── database.ts
    │   └── server.ts
    ├── package.json
    ├── tsconfig.json
    └── .env
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Step 1: Clone/Download the Project

Create the project structure as shown above with all provided files.

### Step 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kanban-board

# Start MongoDB (if using local)
# For Windows: net start MongoDB
# For Mac/Linux: brew services start mongodb-community

# Run backend in development mode
npm run dev

# Or build and run in production
npm run build
npm start
```

The backend will start on `http://localhost:5000`

### Step 3: Frontend Setup

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create .env file with:
VITE_API_URL=http://localhost:5000/api

# Run frontend in development mode
npm run dev

# Or build for production
npm run build
npm run preview
```

The frontend will start on `http://localhost:3000`

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kanban-board
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kanban-board
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Request/Response Examples

**Create Task (POST /api/tasks)**
```json
{
  "title": "Complete project",
  "description": "Finish the Kanban board",
  "status": "todo",
  "priority": "high"
}
```

**Update Task (PUT /api/tasks/:id)**
```json
{
  "status": "done"
}
```

## 🎨 Features in Detail

### Drag & Drop
- Powered by @dnd-kit
- Smooth animations
- Visual feedback during drag
- Cross-column task movement

### Theme System
- Persistent localStorage
- Smooth transitions
- Animated toggle button
- System-wide theme propagation

### Task Management
- Create tasks with title, description, priority
- Edit any task property
- Delete with confirmation
- Automatic status updates via drag & drop

### Responsive Design
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🌐 Deployment

### Backend - Deploy to Render

1. Create account on [Render](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Add environment variable: `MONGODB_URI`
5. Deploy!

### Frontend - Deploy to Vercel

1. Create account on [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Add environment variable: `VITE_API_URL` (your Render backend URL)
4. Deploy!

### Alternative: Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build frontend
cd frontend
npm run build

# Deploy
netlify deploy --prod
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **@dnd-kit** - Drag and drop
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **TypeScript** - Type safety
- **CORS** - Cross-origin support
- **dotenv** - Environment variables

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
mongosh

# For local MongoDB
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### Port Already in Use
```bash
# Backend (5000)
lsof -ti:5000 | xargs kill -9

# Frontend (3000)
lsof -ti:3000 | xargs kill -9
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Scripts Reference

### Backend
- `npm run dev` - Development mode with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production build

### Frontend
- `npm run dev` - Development mode with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Task filtering and search
- [ ] Due dates and reminders
- [ ] Task assignments
- [ ] Activity history
- [ ] File attachments
- [ ] Real-time collaboration
- [ ] Export to PDF/CSV

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Acknowledgments

- Design inspired by modern project management tools
- Built with love using the MERN stack

---

**Made with ❤️ By Saurabh Shukla**