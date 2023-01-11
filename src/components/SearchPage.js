import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import './SearchPage.css';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const SearchPage = () =>{

  return (
    <div className='search-page'>
      <div className="search-page-header">
        <Link to="/">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
        </Link>
        <div className="search-page-header-body">
          <Search hidebuttons/>
          <div className="search-page-options">
            <div className="search-page-options-left">
              <div className="search-page-option">
                <SearchIcon/>
                <Link to="/all">
                  All
                </Link>
              </div>
              <div className="search-page-option">
                <ImageIcon/>
                <Link to="/all">
                  Images
                </Link>
              </div>
              <div className="search-page-option">
                <LocalOfferIcon/>
                <Link to="/all">
                  Shopping
                </Link>
              </div>
              <div className="search-page-option">
                <NewspaperIcon/>
                <Link to="/all">
                  News
                </Link>
              </div>
              <div className="search-page-option">
                <SlideshowIcon/>
                <Link to="/all">
                  Videos
                </Link>
              </div>
              <div className="search-page-option">
                <MoreVertIcon/>
                <Link to="/all">
                  More
                </Link>
              </div>
            </div>
            <div className="search-page-options-right">
              <div className="search-page-option">
                <Link to="/all">
                  Settings
                </Link>
              </div>
              <div className="search-page-option">
                <Link to="/all">
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-page-results">
        <p className="search-page-results-count">
          About 8,880,000 results (0.57) for camel order
        </p>
        <div className="search-page-result">
          <a href='' className='search-page-result-link'>
            <img className='search-page-results-image' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1673422964~exp=1673423564~hmac=c2a6676ab9abc0da1b753de858fcfe7f93fa2c0781ea9e7e7631ae5b566657d5" alt="" />
            mysite.com
          </a>
          <a href="" className='search-page-result-title'>
            <h2>My Site</h2>
          </a>
          <p className='search-page-result-description'>Download and use 600+ Website stock photos for free. ✓ Thousands of new images</p>
        </div>
      </div>
    </div>
  )
}

export default SearchPage;