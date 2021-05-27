import React, { useState, useEffect } from 'react';
import face from '../../../img/face.png';
import runningMan from '../../../img/running-man-drawing-31.gif';

const WelcomeSection = () => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLeft(prev => prev > window.screen.availWidth ? -150 : prev + 1);
        }, 7.5);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section mt-5">
            <header className="text-center"><h2>Hi, I'm Marcin</h2></header>
            <div className="text-center mt-2">
                <img className="img__face" alt="my face :D" src={face} />
            </div>
            <article className="text-center">
                <h1 className="mt-2">Junior React Developer</h1>
                <div className="mt-2">I program things to make the world a simpler place.</div>
                <div className="mt-1 text-bold">And this is my portfolio.</div>
            </article>
        </section>
    );
}

export default WelcomeSection;
