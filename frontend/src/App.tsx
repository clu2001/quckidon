import React from 'react'

import Home from './Pages/Home.tsx';
import CharacterGallery from './Pages/CharacterGallery.tsx';
import SingleCharacter from './Pages/SingleCharacter.tsx';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
  } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character-gallery" element={<CharacterGallery />} />
            <Route path="/character" element={<SingleCharacter />} />
            </Routes>
        </Router>

    )
}

export default App; 