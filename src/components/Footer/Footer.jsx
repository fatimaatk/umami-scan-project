import './footer.css';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow Us</p>
      <div className="div_ul">
        <ul className="social_list">
          <li className="social_list_li">
            <img className="logo_sociaux" src={Facebook} alt="logo Facebook" />
          </li>
          <li className="social_list_li">
            <img className="logo_sociaux" src={Twitter} alt="logo Twitter" />
          </li>
          <li className="social_list_li">
            <img
              className="logo_sociaux"
              src={Instagram}
              alt="logo Instagram"
            />
          </li>
        </ul>
      </div>
      <p>Copyright @2021 | Designed by Umami Fr Remote</p>
    </footer>
  );
};

export default Footer;
