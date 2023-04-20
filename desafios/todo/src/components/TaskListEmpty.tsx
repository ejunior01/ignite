import { ClipboardText } from "@phosphor-icons/react";

import style from "./TaskListEmpty.module.css";
import { motion } from "framer-motion";

export function TaskListEmpty() {
  return (
    <motion.div
      className={style.listEmpty}
      initial={{ opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ ease: "backInOut", duration: 0.5 }}
    >
      <ClipboardText size={56} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </motion.div>
  );
}
