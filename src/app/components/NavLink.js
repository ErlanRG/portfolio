const NavLink = ({ href, children, onClick, isActive }) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`block px-4 py-2 transition-all duration-300 ease-in-out transform ${
          isActive ? 'text-cat-text font-bold scale-110' : 'text-cat-overlay0'
        } hover:scale-105 hover:text-cat-teal`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
