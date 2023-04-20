import { ChangeEvent, FormEvent, useState } from "react";

import { ITask } from "../interfaces/InterfaceTask";
import { PlusCircle } from "@phosphor-icons/react";
import style from "./NewTaskForm.module.css";

interface NewTaskProps {
  createTask: (task: ITask) => void;
}

export function NewTaskForm({ createTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
 
    createTask({
      id: crypto.randomUUID(),
      content: newTaskText,
      isDone: false,
    });

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <form className={style.newtask} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
