import React from 'react'
import "./ColorButton.css"

interface Props{
    mainColor: string;
    backgroundColor: string;
    onClick: () => void;
}

const ColorButton = ({onClick, mainColor, backgroundColor}: Props) => {
    const setColor = () => {
        console.log("color button was pressed.")
    }

    const buttonStyle: React.CSSProperties = {
        background: 'radial-gradient('+ mainColor + ' 0%,'+ mainColor + ' 40%,'+ backgroundColor + ' 40%,'+ backgroundColor + ' 100%)'
    }

    return (
        <button onClick={onClick} className="colorbtn" style={buttonStyle}></button>
    )
}

export default ColorButton