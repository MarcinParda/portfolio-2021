import React, { useState, useEffect } from 'react';
import runningMan from '../../../img/running-man-drawing-31.gif';

const RunningMan = ({revert, className}) => {
    const [left, setLeft] = useState(revert ? window.innerWidth : -150);

    useEffect(() => {
        const interval = setInterval(() => {
            if(revert){
                setLeft(prev => prev < -150 ? window.innerWidth : prev - 1);
            } else {
                setLeft(prev => prev > window.innerWidth ? -150 : prev + 1);
            }
        }, 7.5);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={className}>
            <img className="img__small" style={{left: `${left}px`, position: 'absolute', transform: `${revert ? "scale(-1)" : "scaleY(1)"}` }} alt="running man" src={runningMan} />
        </div>
    );
}

export default RunningMan;
