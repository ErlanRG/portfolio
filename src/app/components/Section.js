import React from 'react';

const Section = ({ bgColor, children, id }) => {
  return (
    <section id={id} className={`h-screen snap-start ${bgColor} flex items-center justify-center`}>
      {children}
    </section>
  );
};

export default Section;
