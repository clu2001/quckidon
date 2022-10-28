import React from "react"; 
import { useDynamicWindowDimensions } from "../Utilities/Utilities.tsx"
import CharacterComponent from "./CharacterComponent.tsx"


// container div for where a single character component is kept in 
const CharacterContainer = ( props: left ) => {
    const { height, width } = useDynamicWindowDimensions();

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
        <CharacterComponent left={props.left} character={"Jack"} />
    </div>); 
}

export default CharacterContainer; 