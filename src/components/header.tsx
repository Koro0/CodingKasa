import Logo from '../images/LOGO.png';
const Home = 'http://localhost:3000/';
const APropos = 'http://localhost:3000/a_propos';

export default function Header() {
  return (
    <header className="_Header rowFlex">
      <a href={Home}>
        <img className="logo" src={Logo} alt="LOGO" />
      </a>
      <nav>
        <ul className="navList">
          <li>
            <a href={Home}> Accueil </a>
          </li>
          <li>
            <a href={APropos}>A Propos </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
