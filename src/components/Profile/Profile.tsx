import React from 'react';
import './Profile.scss';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return (
    <div className='content'>
      <div>
        <img 
          className='content-banner'
          alt='banner'
          src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752' 
        />
        <p></p>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;