import React from "react";
import { Todo } from "../Models/model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Array<Todo>;
  setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  completedTodo,
  setCompletedTodo,
}) => {
  return (
    <div className=" mt-3 w-11/12 flex items-start justify-between sm: w-11/12 sm:flex-col">
      <Droppable droppableId="Tlist">
        {(provided, snapshot) => (
          <div
            className={`rounded 2xl flex flex-col w-2/5 p-12 bg-orange-400 lg: w-6/12 sm:w-11/12 sm:mb-3 ${
              snapshot.isDraggingOver ? "bg-slate-400" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-white text-2xl">Active tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`rounded 2xl flex flex-col w-2/5 p-12 bg-green-900 lg: w-6/12 sm:w-11/12 sm:mb-3 ${
              snapshot.isDraggingOver ? "bg-slate-300" : "bg-red-500"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-white text-2xl">Completed tasks</span>
            {completedTodo?.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                todos={completedTodo}
                setTodos={setCompletedTodo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
