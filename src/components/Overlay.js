import React from 'react';
import './components/Overlay.css';

export function Overlay ({ isOpen, onClose, children }) {
    return (
        <>
            {
                isOpen ? (
                    <div className='overlay'>
                        <div className='overlay_background' onClick={onClose}>
                            <div className='overlay_container'>
                                <div className='overlay_controls'>
                                    <button className='overlay_closer' type='button' onClick={onClose}></button>
                                </div>
                                {children}
                            </div>

                        </div>
                    </div>
                ): null
            }
        </>
    )
}