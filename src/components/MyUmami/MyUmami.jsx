import { Link } from 'react-router-dom';
import './myUmami.css';

const MyUmami = () => {
  return (
    <section className="MyUmami">
      <h1>My Umami</h1>
      <div className="MyUmami-links">
        <Link to="/my-favorites">Mes favoris</Link>
        <Link to="#">Mon historique</Link>
      </div>
    </section>
  );
};

export default MyUmami;
