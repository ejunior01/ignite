import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import style from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ejunior01.png",
      name: "Edvan Ribeiro",
      role: "Analista de suporte",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    hashTags: ["#novoprojeto", "#nlw", "#rocketseat","#learnreact"],
    publishedAt: new Date("2023-03-03 20:20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ejunior01.png",
      name: "Jaqueline Ribeiro",
      role: "Analista de suporte",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    hashTags: ["#novoprojeto", "#nlw", "#rocketseat"],
    publishedAt: new Date("2023-04-03 20:20:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) =>  <Post key={post.id} author={post.author}  content={post.content} hashTags={post.hashTags} publishedAt={post.publishedAt}  />)}
        </main>
      </div>
    </div>
  );
}

export default App;
