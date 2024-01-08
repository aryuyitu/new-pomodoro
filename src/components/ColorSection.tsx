import React from 'react'
import ColorButton from './ColorButton'


const ColorSection = () => {
  return (
    <>
        <ul className="colorRow">
            <li><ColorButton mainColor='rgb(255, 255, 255)' backgroundColor='rgb(244,244,244)' textColor='black'/></li>
            <li><ColorButton mainColor='rgb(234,210,186)' backgroundColor='rgb(178,192,175)' textColor='black'/></li>
            <li><ColorButton mainColor='rgba(56,71,94,255)' backgroundColor='rgba(200,196,197,255)' textColor=''/></li>
            <li><ColorButton mainColor='rgba(137,168,151,255)' backgroundColor='rgba(228,217,199,255)' textColor='black'/></li>
        </ul>
        <ul className="colorRow">
            <li><ColorButton mainColor='rgba(227,230,235,255)' backgroundColor='rgba(236,192,155,255)' textColor='black'/></li>
            <li><ColorButton mainColor='rgba(249,249,249,255)' backgroundColor='rgba(160,101,59,255)' textColor='black'/></li>
            <li><ColorButton mainColor='rgba(183,172,172,255)' backgroundColor='rgba(98,88,79,255)' textColor=''/></li>
            <li><ColorButton mainColor='rgb(255,226,235)' backgroundColor='rgb(154,159,179)' textColor='black'/></li>
        </ul>
        <div className="line-break"></div>
        <ul className="colorRow">
            <li><ColorButton mainColor='rgb(255, 255, 255)' backgroundColor='rgb(244,244,244)' textColor='black'/></li>
            <li><ColorButton mainColor='rgb(234,210,186)' backgroundColor='rgb(178,192,175)' textColor='black'/></li>
            <li><ColorButton mainColor='rgba(56,71,94,255)' backgroundColor='rgba(200,196,197,255)' textColor=''/></li>
            <li><ColorButton mainColor='rgba(137,168,151,255)' backgroundColor='rgba(228,217,199,255)' textColor='black'/></li>
        </ul>
        <ul className="colorRow">
            <li><ColorButton mainColor='rgba(227,230,235,255)' backgroundColor='rgba(236,192,155,255)' textColor='black'/></li>
            <li><ColorButton mainColor='rgba(249,249,249,255)' backgroundColor='rgba(160,101,59,255)' textColor='black'/></li>
            <li><ColorButton mainColor='rgba(183,172,172,255)' backgroundColor='rgba(98,88,79,255)' textColor=''/></li>
            <li><ColorButton mainColor='rgb(255,226,235)' backgroundColor='rgb(154,159,179)' textColor='black'/></li>
        </ul>
    </>
  )
}

export default ColorSection