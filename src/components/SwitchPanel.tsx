import React, { useEffect, useState } from 'react';

interface  visibleProps {
    visiblePanel: string;
    setVisiblePanel: (visiblePanel:string) => void;
}

const SwitchPanel = ({visiblePanel, setVisiblePanel}: visibleProps) => { 
    const [anim, setAnim] = useState(false);  
    const toggleVisibility = () => {
        setAnim(true);
        setVisiblePanel(visiblePanel === 'login' ? 'signup' : 'login');
    };

     useEffect(() => {
         if (anim) {
            const timeoutId = setTimeout(() => {
                setAnim(false);
             }, 1500);
            return () => clearTimeout(timeoutId);
         }
    }, [anim]);

    return (
        <div className={`switch ${anim ? 'is-gx' : ''} ${visiblePanel === 'login' && 'is-transform-rigth' } `}>
            <div className={`switch-circle ${visiblePanel === 'login' && 'is-transform-rigth' }`}></div>
            <div className={`switch-circle-two ${visiblePanel === 'login' && 'is-transform-rigth' }`}></div>
            <div className={`switch-container ${visiblePanel === 'signup' ? '' : 'is-hidden'}`}>
                <h2 className='switch-title title'>Welcome Back!</h2>
                <p className='switch-description description'>To keep connected with us please login with your personal info</p>
                <button onClick={toggleVisibility} type="button" className='switch-button button'>Sign In</button>
            </div>
            <div className={`switch-container ${visiblePanel === 'login' ? '' : 'is-hidden'}`}>
                
                <h2 className='switch-title title'>Hello Friend!</h2>
                <p className='switch-description description'>Enter your personal details and start journey with us</p>
                <button onClick={toggleVisibility} type="button" className='switch-button button'>Sign Up</button>
            </div>
        </div>
    );
};

export default SwitchPanel;
