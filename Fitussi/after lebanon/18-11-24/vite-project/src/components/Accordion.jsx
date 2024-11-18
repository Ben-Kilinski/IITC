import React, { useState } from 'react';

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion}>
        <h3>{isOpen ? 'Fechar' : 'Abrir'}</h3>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
