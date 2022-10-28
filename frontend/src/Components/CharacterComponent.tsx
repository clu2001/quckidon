import React from "react"; 
import ProfileComponent from "./ProfileComponent.tsx"
// profile of a character (image)
const CharacterComponent = ( props: left, character ) => {


    console.log(props.left)
    console.log(props.character)

    return (
        <div style={{gridColumnStart: props.left ? '1' : '2'}}>
            Hello
            <ProfileComponent/>
        </div>
    ); 

}

export default CharacterComponent; 