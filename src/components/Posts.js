import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'im.mayyur',
    userImg: '../assets/img/mayur.jpg',
    img: '../assets/img/mayur.jpg',
    caption: 'Love 💕',
  },
  {
    id: '123',
    username: 'im.mayyur',
    userImg: '../assets/img/mayur.jpg',
    img: '../assets/img/mayur.jpg',
    caption: 'Love 💕',
  },
];
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
