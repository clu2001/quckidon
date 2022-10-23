import React from "react"; 
// profile of a character (image)
const CharacterComponent = ( left: boolean ) => {
    var styling = {
        gridColumnStart: `1`, 
        backgroundColor: 'lightblue'
    }

    if (left) {
        styling = {
            gridColumnStart: `2`, 
            backgroundColor: 'lightblue'
        }
    }

    console.log(styling)

    return (
        <div style={styling}>
            Hello
            
        </div>
        ); 
}

export default CharacterComponent; 