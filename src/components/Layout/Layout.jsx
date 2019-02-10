import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

export default function Layout(props) {
    return (
        <>
            <Header />
            <Navigation />
            <div className="container">
                {props.children}
            </div>
        </>
    )
}