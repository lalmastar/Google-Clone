import React from 'react';
import Home from './components/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';


function App() {
  return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/search' element={<SearchPage/>} />
          </Routes>
      </div>

  );
}

export default App;

