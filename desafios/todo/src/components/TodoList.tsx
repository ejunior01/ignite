import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { AddTodoItem } from "./AddTodoItem";
import { InterfaceTodoItem } from "../interfaces/InterfaceTodoItem";
import { TodoItem } from "./TodoItem";
import { TodoListEmpty } from "./TodoListEmpty";
import style from "./TodoList.module.css";

export function TodoList() {
  const [todoList, setTodoList] = useState<InterfaceTodoItem[]>(
    [] as InterfaceTodoItem[]
  );

  function sortByIsComplete(newTodosList: InterfaceTodoItem[]) {
    return newTodosList.sort((a, b) => {
      if (a.isComplete === false) return -1;
      if (a.isComplete === true) return 1;
      return 0;
    });
  }

  function addTodo(todoItem: InterfaceTodoItem) {
    const newtodoList = [todoItem, ...todoList];

    localStorage.setItem("todoList", JSON.stringify(newtodoList));
    setTodoList([...newtodoList]);
  }

  function CompletetodoItem(todoItem: InterfaceTodoItem) {
    const todoItemCompleted = todoList.map((element) => {
      if (todoItem.id === element.id) {
        element.isComplete = !element.isComplete;
      }
      return element;
    });

    localStorage.setItem("todoList", JSON.stringify(todoItemCompleted));
    setTodoList(sortByIsComplete(todoItemCompleted));
  }

  function deletetodoItem(todoItem: InterfaceTodoItem) {
    const todoLisWithouttodoDeleted = todoList.filter(
      (element) => todoItem.id != element.id
    );

    localStorage.setItem("todoList", JSON.stringify(todoLisWithouttodoDeleted));
    setTodoList(todoLisWithouttodoDeleted);
  }

  useEffect(() => {
    const todoListInCached = localStorage.getItem("todoList");
    
    if (todoListInCached) {
      const todoListInCachedParsed = JSON.parse(todoListInCached);
      setTodoList(sortByIsComplete(todoListInCachedParsed));
    }
    
  }, [todoList]);



  const totalTodoListCompleted = todoList.filter(
    (todoItem) => todoItem.isComplete
  ).length;
  const totalTodoList = todoList.length;

  return (
    <div className={style.todolist}>
      <AddTodoItem addTodo={addTodo} />
      <header>
        <div className={style.totaltodo}>
          <strong>Tarefas criadas</strong>
          <span>{totalTodoList}</span>
        </div>
        <div className={style.totaltodocompleted}>
          <strong>Concluídas</strong>
          <span>
            {totalTodoListCompleted} de {totalTodoList}
          </span>
        </div>
      </header>
      <main>
        {totalTodoList > 0 ? (
          <ul>
            <AnimatePresence>
              {todoList.map((todoItem) => (
                <TodoItem
                  key={todoItem.id}
                  todoItem={todoItem}
                  onCompleteTodo={CompletetodoItem}
                  onDeleteTodo={deletetodoItem}
                />
              ))}
            </AnimatePresence>
          </ul>
        ) : (
          <AnimatePresence>
            <TodoListEmpty />
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
