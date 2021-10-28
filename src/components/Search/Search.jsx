import Button from './Button/Button';
import Scan from './Scan/Scan';
import './search.css';

const Search = () => {
  return (
    <div className="searchtext">
      <p>What do you want to add to your Umami ?</p>
      <div className="search">
        <Scan />
        <Button />
      </div>
    </div>
  );
};

export default Search;
