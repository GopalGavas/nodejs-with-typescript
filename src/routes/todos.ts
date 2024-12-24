import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todos";

const router = Router();

router.route("/").post(createTodo);

router.route("/").get(getTodos);

router.route("/:id").patch(updateTodo);

router.route("/:id").delete(deleteTodo);

export default router;
