import React, { useContext } from 'react';
import '../profile.css'
import foto from '../assets/example-profile.png'
import ubication from '../assets/icon-location.svg'
import link from '../assets/icon-website.svg'
import twitter from '../assets/icon-twitter.svg'
import company from '../assets/icon-company.svg'
import { ThemeContext } from './themeContext.jsx';

const profile_component = ({profileData}) =>{
  const {theme} = useContext(ThemeContext);
  if (!profileData) {
    return <div></div>;
  }
    return(
        <section className={`user-card ${theme}`}>
            <div className="user-container">

            <img src={profileData.avatar_url} alt="Avatar" className='profile-avatar'/>
            <div className='profile-details'>
                <h1 className={`profile-name ${theme}`}>{profileData.name}</h1>
                <p className={`profile-username`}>{profileData.login}</p>
                <p className={`profile-join-date ${theme}`}> 
                Joined {new Date(profileData.created_at).
                toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                   })}
                   </p>
            </div>
            </div>

            <p className={`profile-bio ${theme}`}>{profileData.bio}</p>
           
            <div className={`stats-container ${theme}`}>

              <div className={`stat`}>
                <span className={`stat-repos ${theme}`}>Repos</span>
                <span className={`stat-repos-number ${theme}`}>{profileData.public_repos}</span>
              </div>

              <div className={`stat`}>
                <span className={`stat-followers ${theme}`}>Followers</span>
                <span className={`stat-follows-number ${theme}`}>{profileData.followers}</span>
              </div>

              <div className={`stat`}>
                <span className={`stat-follow ${theme}`}>Following</span>
                <span className={`stat-following-number ${theme}`}>{profileData.following}</span>
              </div>
            </div>

            <div className="profile-links-container">

              <div className='location-container'>
                <img src={ubication} alt="ubication-icon" />
                <span className={`location-text ${theme}`}>{profileData.location}</span>
              </div>

              <div className='link-container'>
                <img src={link} alt="link-icon" />
                <span className={`link-text ${theme}`}>{profileData.blog}</span>
              </div>

              <div className='x-container'>
                <img src={twitter} alt="twitter-icon" />
                <span className={`x-text ${theme}`}>{profileData.twitter_username}</span>
              </div>

              <div className='company-container'>
                <img src={company} alt="company-icon" />
                <span className={`company-text ${theme}`}>{profileData.company}</span>
              </div>

            </div>

        </section>
    )
}

export default profile_component