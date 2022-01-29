import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';
import Button from '../../common/Button/Button'

function MyPosts() {
    return (
        <div
            className='my-posts-wrapper'>
            <h3
                className='title'
            >
                My posts:
            </h3>
            <div
                className='new-post'
            >
                <textarea></textarea>
                <Button />
            </div>
            <div
                className='posts-wrapper'
            >
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    );
}

export default MyPosts;