import { Router, Request, Response } from 'express';
import { taskList, Task } from '../data/taskData';

const router = Router();

/**
 * @route   GET /api/tasks
 * @desc    Fetch all tasks with optional filtering by status (completed or pending)
 * @access  Public
 */
router.get('/', (req: Request, res: Response): void => {
  const { status } = req.query;

  let filteredTasks = taskList;

  if (status === 'completed') {
    filteredTasks = taskList.filter(task => task.completed === true);
  } else if (status === 'pending') {
    filteredTasks = taskList.filter(task => task.completed === false);
  }

  res.json(filteredTasks);
});

/**
 * @route   POST /api/tasks
 * @desc    Add a new task with validation
 * @access  Public
 */
router.post('/', (req: Request, res: Response): void => {
  const { title } = req.body;

  // Validate title exists and is not empty or whitespace-only
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    res.status(400).json({ error: 'Title is required and must not be empty' });
    return;
  }

  const newTask: Task = {
    id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1,
    title: title.trim(),
    completed: false,
  };

  taskList.push(newTask);
  res.status(201).json(newTask);
});

// The rest of your routes remain unchanged

router.put('/:id', (req: Request, res: Response): void => {
  const taskId = parseInt(req.params.id);
  const task = taskList.find(task => task.id === taskId);

  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }

  task.completed = true;
  res.json(task);
});

router.delete('/:id', (req: Request, res: Response): void => {
  const taskId = parseInt(req.params.id);

  const index = taskList.findIndex(task => task.id === taskId);
  if (index === -1) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }

  taskList.splice(index, 1);
  res.status(204).send();
});

export default router;
