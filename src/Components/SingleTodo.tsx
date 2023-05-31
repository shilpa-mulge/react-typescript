import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../Models/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
interface props {
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<props> = ({ todo, todos, index, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const EditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const DeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const TickTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => EditTodo(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`flex  p-5 mt-4 single ${
            snapshot.isDragging ? "drag" : ""
          }`}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="flex-1 p-1 border-none text-2xl focus:outline-none"
              ref={inputRef}
            />
          ) : todo.isDone ? (
            <s className="flex-1 p-1 border-none text-2xl focus:outline-none">
              {todo.todo}
            </s>
          ) : (
            <span className="flex-1 p-1 border-none text-2xl focus:outline-none">
              {todo.todo}
            </span>
          )}

          <div className="flex">
            <span
              className="ml-3 cursor-pointer text-2xl"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>

            <span
              className="ml-3 cursor-pointer text-2xl"
              onClick={() => DeleteTodo(todo.id)}
            >
              <AiFillDelete />
            </span>

            <span
              className="ml-3 cursor-pointer text-2xl"
              onClick={() => TickTodo(todo.id)}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
