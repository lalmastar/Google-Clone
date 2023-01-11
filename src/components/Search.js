import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Search = ({hidebuttons}) => {


  const [input, setInput] = useState("");
  const history = useNavigate();
  
  const search = (e) => {
    e.preventDefault();

  }

  return (
    <form className='search'>
        <div className="search-input">
            <SearchIcon className="searchicon"/>
            <input value={input} onChange={e=>setInput(e.target.value)} />
            <MicIcon />
        </div>
        {
          !hidebuttons && <div className="search-buttons">
            <Button type='submit' varient="outlined">Google Search</Button>
            <Button varient="outlined">I'm Feeling Lucky</Button>
        </div>
        }
        
    </form>
  )
}

export default Search;