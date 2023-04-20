import { ITask } from "../interfaces/InterfaceTask";
import { Trash } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import style from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
  task: ITask;
  onComplete: (task: ITask) => void;
  onDelete: (task: ITask) => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
  const [isDone, setIsDone] = useState(false);

  function handleCompleteTask() {
    setIsDone(!isDone);
    onComplete(task);
  }

  function handleDeleteTask() {
    onDelete(task);
  }

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ ease: "backInOut", duration: 0.5 }}
      className={style.task}
    >
      <input type="checkbox" name="done" onClick={handleCompleteTask} />
      <div className={style.content}>{task.content}</div>
      <button className={style.removeTask} onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </motion.li>
  );
}
