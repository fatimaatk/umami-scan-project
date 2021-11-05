import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li className="contactTeam">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Aurelien Ferrand
          </a>
        </li>
        <li className="contactTeam">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Fatima Ait Khelifa
          </a>
        </li>
        <li className="contactTeam">
          {' '}
          <a
            href="https://www.linkedin.com/in/julienroth/?originalSubdomain=fr"
            target="_blank"
            rel="noreferrer"
          >
            Julien Roth
          </a>
        </li>
        <li className="contactTeam">
          {' '}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Nicolas Bas
          </a>
        </li>
      </ul>
      <p>
        <br />
        Copyright @2021 | Designed by Umami Fr Remote <br /> <br />
        Project designed for Web Developper training at the WildCodeSchool
      </p>
    </footer>
  );
};

export default Footer;
