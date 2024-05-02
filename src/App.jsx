import { useState,useEffect } from 'react'
import iconWebsite from "./assets/icon-website.svg"
import iconCompany from "./assets/icon-company.svg"
import ThemeToggle from './component/theme-toggle'
import { ThemeContext } from './component/themeContext'
import SearchInput from './component/input-search'
import Profile_component from './component/profile-component'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const searchUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data.message === "Not Found") {
      setError(true);
      setProfileData(null);
    } else {
      setError(false);
      setProfileData(data);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main>
        <ThemeToggle />
        <SearchInput searchUser={searchUser} error={error} />
        <Profile_component profileData={profileData} />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
