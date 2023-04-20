import { Avatar } from "./Avatar";
import { PencilLine } from "@phosphor-icons/react";
import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1679855928053-1efa68c35713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={style.profile}>
        <Avatar src={"https://github.com/ejunior01.png"} />
        <strong>Edvan Ribeiro</strong>
        <span>Analista de suporte</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
