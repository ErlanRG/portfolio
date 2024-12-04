const Text = ({ children, className }) => {
  return (
    <p className={`text-cat-text text-center text-xl leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export default Text;
