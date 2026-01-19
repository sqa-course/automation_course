import  './Header.css';
import {NavLink} from "react-router-dom";
import fire from '../../assets/icons/flame.png';

const Header = () => {
  return (
      <header>
        <NavLink
          to="/tree-selectors"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Simple selectors
        </NavLink>
        <NavLink
          to="/composite-selectors"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Composite selectors
        </NavLink>
        <NavLink
          to="/registration-form"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Registration
        </NavLink>
        <NavLink
          to="/registration-form-fire"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Registration
          <img src={fire} alt="fire"/>
        </NavLink>
        <NavLink
          to="/registration-form-timer"
          className={({isActive}) => isActive ? 'link active' : 'link'}
        >
          Registration (5sec)
        </NavLink>
      </header>
  );
};

export default Header;
