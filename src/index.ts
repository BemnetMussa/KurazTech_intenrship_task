import express from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing JSON
app.use('/api/tasks', tasksRouter); // use the router

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
