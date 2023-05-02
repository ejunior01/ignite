import { ChangeEvent, FormEvent, useState } from "react";

import { InterfaceTodoItem } from "../interfaces/InterfaceTodoItem";
import { PlusCircle } from "@phosphor-icons/react";
import style from "./AddTodoItem.module.css";
import { v4 as uuidv4 } from "uuid";

interface AddTodoItemProps {
  addTodo: (todoItem: InterfaceTodoItem) => void;
}

export function AddTodoItem({ addTodo }: AddTodoItemProps) {
  const [content, setContent] = useState("");

  function handleAddTodo(event: FormEvent) {
    event.preventDefault();

    addTodo({
      id: uuidv4(),
      content: content,
      isComplete: false,
    });

    setContent("");
  }

  function handleContentChange(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <form className={style.addTodo} onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={content}
        onChange={handleContentChange}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
