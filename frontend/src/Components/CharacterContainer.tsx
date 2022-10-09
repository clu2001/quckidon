import React from "react"; 
import { useDynamicWindowDimensions } from "../Utilities/Utilities.tsx"
import CharacterComponent from "CharacterComponent.tsx"


const CharacterContainer = ( characterComponent ) => {
    const { height, width } = useDynamicWindowDimensions();

    const left: boolean = false; 

    const componentStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `#1DA1F2`,
    }

    return (
    <div style={componentStyle}>
        <CharacterComponent location={left}/>
    </div>); 
}

export default CharacterContainer; 