import React, { ReactNode, useState } from 'react'
interface Props{
  btnName: ReactNode;
  textColor: string;
  btnColor: string;
  onClick: () => void;
  disabled: boolean;
}

const NormalButton = ({disabled, btnName, onClick, textColor, btnColor}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const buttonStyle: React.CSSProperties = {
    border: 'none',
	  borderRadius: '10%',
	  boxShadow: isActive ? 'none':'1px 1px 5px rgba(0,0,0,0.25)',
    margin: '5px',
    color: textColor,
    backgroundColor: btnColor,
    fontFamily: 'Poppins',
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} disabled={disabled} style={buttonStyle} onClick={onClick}>{btnName}</button>
  )
}

export default NormalButton