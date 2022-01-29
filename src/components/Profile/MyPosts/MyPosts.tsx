import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';
import Button from '../../common/Button/Button'

function MyPosts() {
    const images: string[] = [
        'https://anime-chan.me/uploads/posts/2020-05/1590598284_ko-yu-anime-anime-art-artist-5944095.jpeg',
        'https://audsf.com.ua/wp-content/uploads/2021/09/242347893_4625577044151894_4123424197349971835_n.jpg',
        'https://content.rozetka.com.ua/goods/images/big/173464171.jpg'
    ]
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
                <Post
                    image={images[0]}
                    message={'Some post №1'}
                />
                <Post
                    image={images[1]}
                    message={'Some post №1'}
                />
                <Post
                    image={images[2]}
                    message={'Some post №1'}
                />
            </div>
        </div>

    );
}

export default MyPosts;