// JSX = JavaScript + XML (html)

import { Header } from './Components/Header';
import {Post} from './Components/Post';
import { Sidebar } from './Components/Sidebar';

import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/victorlima1488.png",
      name: "Victor Lima",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-06-13 22:00:00'),
  },

  { 
    id:  2,
    author: {
      avatarUrl: "https://github.com/victorlima1488.png",
      name: "Neto Maciel",
      role: "Front-end Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-06-13 19:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
