import React from "react"; 
// profile of a character (image)
const CharacterComponent = ( props: left ) => {


    console.log(props.left)

    return (
        <div style={{gridColumnStart: props.left ? '1' : '2'}}>
            Hello
        </div>
    ); 

}

export default CharacterComponent; 