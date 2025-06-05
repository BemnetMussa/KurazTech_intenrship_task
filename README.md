# KurazTech Internship Task

## Task Manager Backend API

A RESTful API for managing tasks, built with Express.js and TypeScript.

## Features

- ✅ CRUD operations for tasks
- 🔍 Filter tasks by completion status (`?filter=completed` or `?filter=pending`)
- ✨ Input validation for task titles
- 🔒 Type-safe with TypeScript
- 💾 In-memory storage (resets on server restart)

## API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/api/tasks` | Get all tasks (optional: `?filter=completed` or `?filter=pending`) | - |
| `POST` | `/api/tasks` | Create a task | `{"title": "Task title"}` |
| `PUT` | `/api/tasks/:id` | Mark task as completed | - |
| `DELETE` | `/api/tasks/:id` | Delete a task | - |

## Setup

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build and start production:**
   \`\`\`bash
   npm run build && npm start
   \`\`\`

## Testing with cURL

### Get all tasks
\`\`\`bash
curl http://localhost:3000/api/tasks
\`\`\`

### Create a new task
\`\`\`bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn TypeScript"}'
\`\`\`

### Update a task (mark as completed)
\`\`\`bash
curl -X PUT http://localhost:3000/api/tasks/1
\`\`\`

### Delete a task
\`\`\`bash
curl -X DELETE http://localhost:3000/api/tasks/1
\`\`\`

### Filter tasks
\`\`\`bash
# Get completed tasks
curl http://localhost:3000/api/tasks?filter=completed

# Get pending tasks
curl http://localhost:3000/api/tasks?filter=pending
\`\`\`

## Project Structure

\`\`\`
backend/
├── src/
│   ├── index.ts           # Main server file
│   ├── routes/tasks.ts    # Task routes
│   └── data/taskData.ts   # Task data management
├── dist/                  # Compiled JavaScript files
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
\`\`\`

## Notes

- 💾 **In-memory storage**: Data resets on server restart
- 🔢 **Auto-increment IDs**: Task IDs are automatically generated
- ✅ **Title validation**: Prevents empty titles and validates input
- 🚀 **TypeScript**: Full type safety throughout the application

## Example Response

### GET /api/tasks
\`\`\`json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false
  },
  {
    "id": 2,
    "title": "Read a book",
    "completed": true
  }
]
\`\`\`

### POST /api/tasks
\`\`\`json
{
  "id": 3,
  "title": "Learn TypeScript",
  "completed": false
}
\`\`\`

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **ts-node-dev** - Development server with hot reload

---

**Built for KurazTech Internship Challenge** 🚀
\`\`\`

This README includes:

- ✅ **Clear structure** with proper headings
- ✅ **Feature list** with emojis for visual appeal
- ✅ **API endpoints table** for easy reference
- ✅ **Step-by-step setup** instructions
- ✅ **Complete cURL examples** for testing
- ✅ **Project structure** visualization
- ✅ **Example responses** showing what to expect
- ✅ **Technology stack** information
- ✅ **Professional formatting** with code blocks and tables

The markdown is properly formatted and will render beautifully on GitHub or any markdown viewer!
