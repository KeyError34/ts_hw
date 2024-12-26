import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT ||3000;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hey from TS');
});

app.post('/post', (req: Request, res: Response) => {
  const { title, description } = req.body;
  res.json({ message: 'Data received', title, description });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
