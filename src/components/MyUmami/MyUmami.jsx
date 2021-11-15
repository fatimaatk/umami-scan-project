import { Link } from 'react-router-dom';

const MyUmami = () => {
  return (
    <div>
      <h1>My Umami</h1>
      <Link to="/my-favorites">Mes favoris</Link>
      <Link to="/my-history">Mon historique</Link>
    </div>
  );
};

export default MyUmami;
