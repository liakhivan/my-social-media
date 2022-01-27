import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <a className='logo' href='s#'>
                <img 
                alt='logo' 
                src='https://i.pinimg.com/favicons/caf24485156b34efc78475d1e701073dcd57f87b7926e38c906fe148.ico?2bafee7fc8765a4d4839557599723174' 
                />
                <p>MSM</p>
            </a>
        </header>
    );
}

export default Header;