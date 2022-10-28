import React from "react"; 
import CharacterContainer from "../Components/CharacterContainer.tsx"; 

// page where it has a gallery of all the different types of characters 
const CharacterGallery = () => {
    
 

    return (
    <div>
        <CharacterContainer left={true}/>
        <CharacterContainer left={false}/>
    </div>); 

}

export default CharacterGallery; 