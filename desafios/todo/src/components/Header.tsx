import logo from "../assets/Logo.svg";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logo do Todo" />
    </header>
  );
}
