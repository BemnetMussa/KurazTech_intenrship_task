import express, { Request, Response } from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing JSON
app.use('/api/tasks', tasksRouter); // use the router

// Root route with better response
app.get("/", async (req: Request, res: Response): Promise<any>=> {
  res.json({
    message: "Task Manager API is running!",
    endpoints: {
      "GET /api/tasks": "Get all tasks (supports ?filter=completed|pending)",
      "POST /api/tasks": "Create a new task",
      "PUT /api/tasks/:id": "Update a task",
      "DELETE /api/tasks/:id": "Delete a task",
    },
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
