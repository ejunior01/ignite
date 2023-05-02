import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
