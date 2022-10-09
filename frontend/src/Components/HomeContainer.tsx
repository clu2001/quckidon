import React from "react"
import { useDynamicWindowDimensions } from "../Utilities/Utilities.tsx"

const HomeContainer = () => {
    const { height, width } = useDynamicWindowDimensions();

    const componentStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `#1DA1F2`,
    }


    return (
        <div style={componentStyle}></div>); 
}

export default HomeContainer; 