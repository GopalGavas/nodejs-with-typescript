import express, { Response, Request, NextFunction } from "express";
import todoRouter from "./routes/todos";

const app = express();

app.use(express.json());

app.use("/todos", todoRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json(err.message);
});

app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});
