Sure! Here is your complete **README.md** file as one single file:

````markdown
# KurazTech Internship Task

## 📋 Task Manager Backend API

A clean and simple RESTful API for managing tasks, built with **Express.js** and **TypeScript**.  
Designed for the internship entrance challenge, focusing on solid TypeScript usage, validation, and filtering.

---

## 🚀 Features

- ✅ **CRUD Operations** — Create, Read, Update, and Delete tasks  
- 🔍 **Filtering** — Filter tasks by completion status (`?filter=completed` or `?filter=pending`)  
- ✨ **Input Validation** — Ensures task titles are non-empty strings  
- 🛡️ **Robust Error Handling** — Meaningful error responses for invalid requests  
- 🔒 **Type Safety** — Full TypeScript implementation for safer code  
- 📅 **In-Memory Storage** — Tasks stored temporarily in-memory (resets on server restart)

---


## 📋 API Endpoints

### Get All Tasks

```http
GET /api/tasks
GET /api/tasks?filter=completed
GET /api/tasks?filter=pending
````

### Create a New Task

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "New task title"
}
```

### Update a Task (mark completed)

```http
PUT /api/tasks/:id
Content-Type: application/json
```

### Delete a Task

```http
DELETE /api/tasks/:id
```

---

## 🛠️ Installation & Setup

1. **Install dependencies**

```bash
npm install
```

2. **Run in development mode**

```bash
npm run dev
```

3. **Build for production and start**

```bash
npm run build
npm start
```

---

## 🧪 Testing with cURL

**Get all tasks:**

```bash
curl http://localhost:3000/api/tasks
```

**Get completed tasks:**

```bash
curl http://localhost:3000/api/tasks?filter=completed
```

**Create a new task:**

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn TypeScript"}'
```

**Mark task as completed:**

```bash
curl -X PUT http://localhost:3000/api/tasks/1
```

**Delete a task:**

```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

---

## 🎯 Project Structure

```
backend/
├── src/
│   ├── index.ts           # Server entry point
│   ├── routes/
│   │   └── tasks.ts       # Task routes (API endpoints)
│   └── data/
│       └── taskData.ts    # In-memory task data and types
├── dist/                  # Compiled JavaScript output
├── tsconfig.json          # TypeScript configuration
├── package.json
└── README.md
```

---

## ⚠️ Notes

* Data is stored **in-memory**, so all tasks reset when the server restarts.
* IDs are automatically incremented based on the last task's ID.
* Title validation prevents empty or whitespace-only titles.

```

If you want, I can help with anything else!
```
