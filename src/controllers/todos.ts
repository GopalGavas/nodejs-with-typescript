import { RequestHandler } from "express";

import { Todo } from "../models/todos";

const TODOS: Todo[] = [];

const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "new Todo created successfully", newTodo });
};

const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: "Todos fetched successfully", TODOS });
};

const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    throw new Error("Could not find todo");
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.status(200).json({
    message: "Todo updated successfully",
    updatedTodo: TODOS[todoIndex],
  });
};

const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    throw new Error("Can't find todo");
  }

  TODOS.splice(todoIndex, 1);

  res.status(200).json({ message: "Todo deleted successfully" });
};

export { createTodo, getTodos, updateTodo, deleteTodo };
