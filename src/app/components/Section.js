const Section = ({ bgColor, children, id }) => {
  return (
    <section id={id} className={`h-screen ${bgColor} flex items-center justify-center`}>
      {children}
    </section>
  );
};

export default Section;
