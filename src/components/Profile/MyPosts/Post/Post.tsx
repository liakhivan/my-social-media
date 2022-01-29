import React from 'react';
import './Post.scss';


const Post = (props: PostInfo) => {
    return (
        <div
            className='post'
        >
            <img
                src= {props.image}
                className='avatar'
                alt='avatar'
            />
            <p
                className='content'
            >
                props.message
            </p>
        </div>
    );
}

export default Post;