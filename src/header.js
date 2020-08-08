import React from 'react';
import './header.css';

export default function Header(){
    return (
        <header className="Header">
            <nav className="Nav">
                <a href='/'>about</a>
                <a href='/'>resume</a>
            </nav>
        </header>
    );
}