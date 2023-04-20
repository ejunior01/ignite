import { format, formatDistanceToNow, formatISO9075 } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import style from "./Post.module.css";

export function Post({ author, content, hashTags, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const publisedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'de' yyyy 'ás' hh:mm",
    {
      locale: ptBR,
    }
  );

  const publisedDateFormattedISO = formatISO9075(publishedAt);

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newComment.length === 0;

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publisedDateFormattedISO} title={publisedDateFormatted}>
          Públicado {publisedDateRelativeToNow}
        </time>
      </header>
      <div className={style.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <a key={line.content} href="" className={style.link}>
                {line.content}
              </a>
            );
          }
        })}

        <div className={style.hashTags}>
          {hashTags.map((hashTag) => {
            return (
              <a key={hashTag} href="" className={style.link}>
                {hashTag}
              </a>
            );
          })}
        </div>
      </div>
      <form className={style.commentForm} onSubmit={handleCreateNewComment}>
        <span>Deixe seu feedback</span>
        <textarea
          placeholder="Deixe seu comentário..."
          value={newComment}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={style.commentList}>
        {comments.map((content) => {
          return (
            <Comment
              key={content}
              content={content}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
