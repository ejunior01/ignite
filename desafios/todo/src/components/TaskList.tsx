import { ITask } from "../interfaces/InterfaceTask";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";
import style from "./TaskList.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TaskListEmpty } from "./TaskListEmpty";

export function TaskList() {
  const [taskList, setTaskList] = useState<ITask[]>([] as ITask[]);

  function sortByIsDone(newTasksArray: ITask[]) {
    const newTasksArraySorted = newTasksArray.sort((a, b) => {
      if (a.isDone === false) return -1;
      if (a.isDone === true) return 1;
      return 0;
    });
    return newTasksArraySorted;
  }

  function createTask(task: ITask) {
    const newTaskList = [task, ...taskList];

    setTaskList([...newTaskList]);
  }

  function CompleteTask(task: ITask) {
    const taskItemCompleted = taskList.map((taskItem) => {
      if (taskItem.id === task.id) {
        taskItem.isDone = !task.isDone;
      }
      return taskItem;
    });

    setTaskList(sortByIsDone(taskItemCompleted));
  }

  function deleteTask(task: ITask) {
    const taskLisWithoutTaskDeleted = taskList.filter(
      (item) => task.id != item.id
    );
    setTaskList(taskLisWithoutTaskDeleted);
  }

  const totalTasksCompleted = taskList.filter((task) => task.isDone).length;
  const totalTasks = taskList.length;

  return (
    <div className={style.tasklist}>
      <NewTaskForm createTask={createTask} />
      <header>
        <div className={style.TasksCreated}>
          <strong>Tarefas criadas</strong>
          <span>{totalTasks}</span>
        </div>
        <div className={style.tasksCompleted}>
          <strong>Concluídas</strong>
          <span>
            {totalTasksCompleted} de {totalTasks}
          </span>
        </div>
      </header>
      <main>
        {totalTasks > 0 ? (
          <ul>
            <AnimatePresence>
              {taskList.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onComplete={CompleteTask}
                  onDelete={deleteTask}
                />
              ))}
            </AnimatePresence>
          </ul>
        ) : (
          <AnimatePresence>
            <TaskListEmpty />
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
