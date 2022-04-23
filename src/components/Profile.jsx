import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <section className={s.content}>
      <img
        src='https://www.watermeetsmoney.com/wp-content/uploads/2017/11/Header-background-2.png'
        className={s.content_img}
      />
      <div> Ava + description</div>
      <div>
        My post
        <div>New Post</div>
      </div>
      <div>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
        <div className={s.item}>Post 3</div>
        <div className={s.item}>Post 4</div>
      </div>
    </section>
  );
};

export default Profile;
