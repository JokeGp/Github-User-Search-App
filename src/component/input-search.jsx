import React, { useContext} from 'react';
import '../App.css'
import searchIcon from '../assets/icon-search.svg'; 
import { ThemeContext } from './themeContext.jsx';

const SearchComponent = ({searchUser, error}) => {
  const {theme} = useContext(ThemeContext);
  const handleSearch = (event) => {
    event.preventDefault();
    searchUser(event.target.elements[0].value);
  };
  return (  
    <form onSubmit={handleSearch} className={`search-container`}>
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      <input type="text" placeholder="Search GitHub username..." className={`search-input ${theme}`} />
      {error && <span className="error-message">Not Found</span>}
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchComponent;
