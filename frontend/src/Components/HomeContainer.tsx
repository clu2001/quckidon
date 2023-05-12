import React from "react"
import { useDynamicWindowDimensions } from "../Utilities/Utilities.tsx"

const HomeContainer = () => {
    const { height, width } = useDynamicWindowDimensions();

    const componentStyle = {
        width: `${width}px`,
        height: `${height}px`,
    }


    return (
        <div style={componentStyle}>
            Home
        </div>); 
}

export default HomeContainer; 