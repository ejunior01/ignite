import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
