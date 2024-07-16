import LogoFooter from '../images/LOGOFooter.png';

export default function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="Kasa" />
      <p className="montserrat">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
