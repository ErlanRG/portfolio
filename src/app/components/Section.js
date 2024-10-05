const Section = ({ children, id }) => {
  return (
    <section id={id} className="min-h-screen bg-cat-base flex items-center justify-center">
      {children}
    </section>
  );
};

export default Section;
