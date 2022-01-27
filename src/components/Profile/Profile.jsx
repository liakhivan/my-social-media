import React from 'react';
import './Profile.scss';

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
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
          <div>
            Post 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;