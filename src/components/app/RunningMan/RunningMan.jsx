import React, { useState, useEffect } from 'react';
import runningMan from '../../../img/running-man-drawing-31.gif';

const RunningMan = ({revert, className}) => {
    const [left, setLeft] = useState(revert ? window.innerWidth : -150);
    const [top, setTop] = useState(revert ? -100 : 95);
    const [rotate, setRotate] = useState(revert ? -100 : -90);

    useEffect(() => {
        const interval = setInterval(() => {
            if (revert) {
                setLeft(prev => {
                    if (prev === -150) {
                        setTop(-95);
                        setRotate(-90);
                    }
                    if (prev < 0) {
                        setTop(prevTop => {
                            if (prevTop > -90) {
                                return prevTop - .225;
                            }
                            return prevTop;
                        });
                        setRotate(prev => {
                            if (prev < 90) {
                                return prev + (90 / 425);
                            }
                            return prev;
                        });
                    }
                    if (prev > window.innerWidth - 150) {
                        setTop(prevTop => {
                            if (prevTop < 0) {
                                return prevTop + .25;
                            }
                            return prevTop;
                        });
                        setRotate(prevRotate => {
                            if (prevRotate < 0) {
                                return prevRotate + (90 / 425);
                            }
                            return prevRotate;
                        });
                    }
                    return prev < -150 ? window.innerWidth : prev - 1;
                });
            } else {
                setLeft(prev => {
                    if (prev === -125) {
                        setTop(95);
                        setRotate(-90);
                    }
                    if (prev < 0) {
                        setTop(prevTop => {
                            if (prevTop > 0) {
                                return prevTop - (112.5 / 125);
                            }
                            return prevTop;
                        });
                        setRotate(prev => {
                            if (prev < 0) {
                                return prev + (90 / 125);
                            }
                            return prev;
                        });
                    }
                    if (prev > window.innerWidth - 125) {
                        setTop(prevTop => {
                            if (prevTop < 95) {
                                return prevTop + .25;
                            }
                            return prevTop;
                        });
                        setRotate(prevRotate => {
                            if (prevRotate < 90) {
                                return prevRotate + (90 / 425);
                            }
                            return prevRotate;
                        });
                    }
                    return prev > window.innerWidth ? -150 : prev + 1;
                });
            }
        }, 7.5);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={className}>
            <img className="img__small" style={{left: `${left}px`, marginTop: `${top}px`, position: 'absolute', transform: `${revert ? `scale(-1) rotate(${rotate}deg)` : `scaleY(1) rotate(${rotate}deg)`}` }} alt="running man" src={runningMan} />
        </div>
    );
}

export default RunningMan;
