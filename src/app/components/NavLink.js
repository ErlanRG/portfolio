const NavLink = ({ children, onClick, href }) => {
  return (
    <li className="nav-item mx-2">
      <a className="nav-link" aria-current="page" href={href} onClick={onClick}>{children}</a>
    </li>
  );
}

export default NavLink;
