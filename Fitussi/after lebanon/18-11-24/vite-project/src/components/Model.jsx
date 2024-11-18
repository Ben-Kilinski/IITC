//2)Modal component 


import React from "react";

const DisplayCards = ({ isOpen, children }) => {

    return (
        isOpen ? (<div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>) : null
    )
};

export default DisplayCards;
