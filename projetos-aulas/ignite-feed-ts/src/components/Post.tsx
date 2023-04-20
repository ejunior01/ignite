import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow, formatISO9075 } from "date-fns";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { ptBR } from "date-fns/locale";
import style from "./Post.module.css";

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  hashTags: string[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType
}


export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Só para iniciar!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publisedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'de' yyyy 'ás' hh:mm",
    {
      locale: ptBR,
    }
  );

  const publisedDateFormattedISO = formatISO9075(post.publishedAt);

  const publisedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event:FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete:string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time dateTime={publisedDateFormattedISO} title={publisedDateFormatted}>
          Públicado {publisedDateRelativeToNow}
        </time>
      </header>
      <div className={style.content}>
        {post.content.map((line) => {
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
          {post.hashTags.map((hashTag) => {
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
          value={newCommentText}
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
