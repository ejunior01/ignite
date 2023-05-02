import Confetti from "./Confetti";
import { InterfaceTodoItem } from "../interfaces/InterfaceTodoItem";
import { Trash } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import style from "./TodoItem.module.css";
import { useState } from "react";

interface InterfaceTodoItemProps {
  todoItem: InterfaceTodoItem;
  onCompleteTodo: (todoItem: InterfaceTodoItem) => void;
  onDeleteTodo: (todoItem: InterfaceTodoItem) => void;
}

export function TodoItem({
  todoItem,
  onCompleteTodo,
  onDeleteTodo,
}: InterfaceTodoItemProps) {
  const [isComplete, setIsComplete] = useState(false);

  function handleCompleteTodoItem() {
    setIsComplete(!isComplete);
    onCompleteTodo(todoItem);
  }

  function handleDeleteTodoItem() {
    onDeleteTodo(todoItem);
  }

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ ease: "backInOut", duration: 0.5 }}
      className={style.todoitem}
    >
      <input
        type="checkbox"
        name="done"
        onClick={handleCompleteTodoItem}
        defaultChecked={todoItem.isComplete}
      />
      <div className={style.content}>{todoItem.content}</div>
      <button className={style.deletetodoitem} onClick={handleDeleteTodoItem}>
        <Trash size={20} />
      </button>
      {isComplete && <Confetti />}
    </motion.li>
  );
}
