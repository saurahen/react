import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <section className={s.content}>
      <img
        src='https://www.watermeetsmoney.com/wp-content/uploads/2017/11/Header-background-2.png'
        className={s.content_img}
      />
      <div> Ava + description</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
