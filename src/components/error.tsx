import Error404 from '../images/404.png';
export default function Error() {
  return (
    <div>
      <div>
        <img className="errorLogo" src={Error404} alt="" />
        <p className="errorText">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <a href="/">
        <p className="errorTextLink">Retourner sur la page d’accueil</p>
      </a>
    </div>
  );
}
