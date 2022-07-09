import React, { useContext } from 'react';
import { HiOutlineMenu, HiOutlineGlobeAlt, HiSearch } from 'react-icons/hi';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/HolisBnb.png';
import storeContext from '../../store';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = () => {
  const { search, setSearch } = useContext(storeContext);
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="" />
        </Link>

        <div className="header__center">
          <input
            type="text"
            placeholder="Search a destination"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-button">
            <HiSearch />
          </div>
        </div>

        <div className="header__right">
          <p>Become a host</p>
          <HiOutlineGlobeAlt />
          <HiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
