import { ThumbsUp, Trash } from "@phosphor-icons/react";

import { Avatar } from "./Avatar";
import style from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  function handleDeleteComment() {
    deleteComment(content);
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src={"https://github.com/ejunior01.png"} />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Edvan</strong>
              <time dateTime="" title="">
                Cerca de 2h
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
