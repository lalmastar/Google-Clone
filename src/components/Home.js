import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import './Home.css';
import Search from './Search';

const Home = () => {
  return (
    <div className='home'>
        <div className="home-header">
            <div className="home-header-left">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="home-header-right">
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon/>
                <Avatar/>
            </div>
        </div> 
           <div className="home-body">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            <div className="home-input-container">
              <Search/>
            </div>
           </div>
    </div>
  )
}

export default Home