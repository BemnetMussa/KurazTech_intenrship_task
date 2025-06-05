import { Router, Request, Response } from 'express';

const router = Router();

// In-memory list of tasks
let taskList = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true },
];

/**
 * @route   GET /api/tasks
 * @desc    Fetch all tasks
 * @access  Public
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  res.json(taskList);
});

/**
 * @route   POST /api/tasks
 * @desc    Add a new task
 * @access  Public
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { title } = req.body;

  // Validate input
  if (!title || typeof title !== 'string') {
    res.status(400).json({ error: 'Valid title is required' });
    return;
  }

  const newTask = {
    id: taskList.length + 1,
    title,
    completed: false,
  };

  taskList.push(newTask);
  res.status(201).json(newTask);
});

/**
 * @route   PUT /api/tasks/:id
 * @desc    Mark a task as completed
 * @access  Public
 */
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id);
  const task = taskList.find(task => task.id === taskId);

  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }

  task.completed = true;
  res.json(task);
});

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete a task by ID
 * @access  Public
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id);

  // Filter out the task with the matching ID
  taskList = taskList.filter(task => task.id !== taskId);

  res.status(204).send(); // No content
});

export default router;
