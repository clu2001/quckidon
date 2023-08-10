import React from "react"
import Button from '@mui/material/Button';
import { useDynamicWindowDimensions } from "../Utilities/Utilities.tsx"
import TextField from '@mui/material/TextField';

const HomeContainer = () => {
    const { height, width } = useDynamicWindowDimensions();

    const componentStyle = {
        width: `${width}px`,
        height: `${height}px`,
    }

    return (
        <div style={componentStyle}>
            <Button variant="outlined">Outlined</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="Admin button">Outlined</Button>
        </div>); 
        
}

export default HomeContainer; 