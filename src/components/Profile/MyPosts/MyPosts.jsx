import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <section className={s.content}>
      <div>
        My post
        <div>New Post</div>
      </div>
      <div>
        <Post message='Hello World!!!' />
        <Post message='PROPSbI LAL KEK CHEBUREK' />
      </div>
    </section>
  );
};

export default MyPosts;
