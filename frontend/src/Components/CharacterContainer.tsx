import React from "react"; 
import { useDynamicWindowDimensions } from "../Utilities/Utilities.tsx"
import CharacterComponent from "./CharacterComponent.tsx"


// container div for where a single character component is kept in 
const CharacterContainer = ( characterComponent ) => {
    const { height, width } = useDynamicWindowDimensions();

    const left: boolean = true; 

    const charsList = ["Jack", "Maria", "Julian", "Johannes"]

    const componentStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `#8B008B`,
        display: 'grid', 
        gridTemplateColumns: `1fr 1fr`, 
        gridTemplateRows: `1fr`
    }

    return (
    <div style={componentStyle}>
        <CharacterComponent left={left}/>
    </div>); 
}

export default CharacterContainer; 