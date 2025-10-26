import { navLinks } from "../../../constants/navLinks";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <img src="/images/logo.png" />
            <p>Velvet Pour</p>
          </a>

          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
