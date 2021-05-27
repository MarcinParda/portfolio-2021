import React from 'react';
import face from '../../../img/face.png';

const WelcomeSection = () => {

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
