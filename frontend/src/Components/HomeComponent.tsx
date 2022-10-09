import React from "react"
import { useDynamicWindowDimensions } from "../Utilities/Utilities.tsx"

const HomeComponent = () => {
    const { height, width } = useDynamicWindowDimensions();

    const componentStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `#1DA1F2`,
    }


    return (
    <div>
        <div style={componentStyle}>Hello</div>
        <div style={componentStyle}>Good bye</div>
    </div>); 
}

export default HomeComponent; 