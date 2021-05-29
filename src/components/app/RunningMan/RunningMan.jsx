import React, { useState, useEffect } from 'react';
import runningMan from '../../../img/running-man-drawing-31.gif';

const RunningMan = ({revert, className}) => {
    const [left, setLeft] = useState(revert ? window.innerWidth : -125);
    const [top, setTop] = useState(revert ? -80 : 80);
    const [rotate, setRotate] = useState(revert ? -90 : -90);

    useEffect(() => {
        const interval = setInterval(() => {
            if (revert) {
                setLeft(prev => {
                    if (prev === -125) {
                        setTop(-80);
                        setRotate(-90);
                    }
                    return prev < -125 ? window.innerWidth : prev - 1;
                });
            } else {
                setLeft(prev => {
                    if (prev === -125) {
                        setTop(80);
                        setRotate(-90);
                    }
                    return prev > window.innerWidth ? -125 : prev + 1;
                });
            }
        }, 7.5);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (revert) {
            if (left < 0) {
                setTop(prevTop => {
                    if (prevTop > -80) {
                        return prevTop - (90 / 125);
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
            if (left > window.innerWidth - 125) {
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
        } else {
            if (left < 0) {
                setTop(prevTop => {
                    if (prevTop > 0) {
                        return prevTop - (prevTop / -left);
                    }
                    return prevTop;
                });
                setRotate(prevRotate => {
                    if (prevRotate < 0) {
                        return prevRotate + (-prevRotate / -left);
                    }
                    return prevRotate;
                });
            }
            if (left > window.innerWidth - 125) {
                setTop(prevTop => {
                    if (prevTop < 80) {
                        return prevTop + ((80 - prevTop) / (window.innerWidth - left));
                    }
                    return prevTop;
                });
                setRotate(prevRotate => {
                    if (prevRotate < 90) {
                        return prevRotate + ((90 - prevRotate) / (window.innerWidth - left));
                    }
                    return prevRotate;
                });
            }
        }
    }, [left]);

    return (
        <div className={className}>
            <img className="img__small" style={{left: `${left}px`, marginTop: `${top}px`, position: 'absolute', transform: `${revert ? `scale(-1) rotate(${rotate}deg)` : `scaleY(1) rotate(${rotate}deg)`}` }} alt="running man" src={runningMan} />
        </div>
    );
}

export default RunningMan;
