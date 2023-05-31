import React, { useRef } from "react";
import "./style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputForm: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className=" flex w-11/12 relative align-middle sm: w-11/12"
    >
      <input
        className="w-full py-5 border-none input-box text-3xl"
        type="text"
        placeholder="Add task"
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button
        className=" absolute right-0 border-none  bg-slate-600 text-white input-submit"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputForm;
