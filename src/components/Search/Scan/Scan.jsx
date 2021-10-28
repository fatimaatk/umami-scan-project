import './scan.css';
import LogoIconPhoto from '../../../assets/icone_appareil_photo.svg';

const Scan = () => {
  return (
    <>
      <div className="scandiv">
        <input
          type="text"
          id="input"
          name="input"
          required
          size="100%"
          placeholder="Product search ..."
        />
        <input
          type="image"
          className="logoIconPhoto"
          src={LogoIconPhoto}
          alt="logo scan"
        />
      </div>
    </>
  );
};

export default Scan;
