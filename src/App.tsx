import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import NormalButton from './components/NormalButton'
import Timer from './components/Timer'
import ColorButton from './components/ColorButton'
import colorMap from './components/ColorButtonProps'

//for google fonts:


function App() {
  let studyAppBackgroundColor = colorMap.get('clrbtn1').backgroundColor;
  let studyMainBackgroundColor = colorMap.get('clrbtn1').boxColor;
  let studyTextColor = colorMap.get('clrbtn1').textColor;
  let breakAppBackgroundColor = colorMap.get('clrbtn1'). backgroundColor;
  let breakMainBackgroundColor = colorMap.get('clrbtn1').boxColor;
  let breakTextColor = colorMap.get('clrbtn1').textColor;

  const studyLength = 25;
  const breakLength = 5; 
  
  const [appBackgroundColor, setAppBackgoundColor] = useState(studyAppBackgroundColor);
  const [mainBackgroundColor, setMainBackgroundColor] = useState(studyMainBackgroundColor);
  const [mainTextColor, setMainTextColor] = useState('black');
  const [aSection, setASection] = useState('study');
  const [workOrBreak, setWorkOrBreak] = useState('Work');
  const [interval, setInterval] = useState(1);
  const [studying, setStudying] = useState(true);


  const setActiveSection = (section: string) => {
    setASection(section);
  };

  const timerEnded = () => {
    console.log('timer end function running');
    if (studying){ //go to break
      setStudying(false);
      setWorkOrBreak('Break');
      refreshColors(false);
    } else { //go to study
      setStudying(true);
      setWorkOrBreak('Work');
      refreshColors(true);
      setInterval(interval + 1);
    }
  }

  const fullTimerReset = () => { // restart the entire timer, back to study session and first interval
    setStudying(true);
    setWorkOrBreak('Work');
    refreshColors(true);
    setInterval(1);
  }

  const refreshColors = (studyingTrue: boolean) => {
    console.log('refresh is running')
    console.log(studyAppBackgroundColor);
    if (studying && studyingTrue){ //studying
      setAppBackgoundColor(studyAppBackgroundColor);
      setMainBackgroundColor(studyMainBackgroundColor);
      setMainTextColor(studyTextColor);
    } else if(!studying && !studyingTrue) {
      setAppBackgoundColor(breakAppBackgroundColor);
      setMainBackgroundColor(breakMainBackgroundColor);
      setMainTextColor(breakTextColor);
    }
  }

  const appStyle: React.CSSProperties = {
    background: appBackgroundColor,
    color: mainTextColor,
  }

  const mainStyle: React.CSSProperties = {
    background: mainBackgroundColor,
  }

  const setBreakColors = (colorButton: string) => {
    breakAppBackgroundColor = colorMap.get(colorButton).backgroundColor;
    breakMainBackgroundColor = colorMap.get(colorButton).boxColor;
    breakTextColor = colorMap.get(colorButton).textColor;
    refreshColors(false);
  }

  const setStudyColors = (colorButton: string) => {
    studyAppBackgroundColor = colorMap.get(colorButton).backgroundColor;
    studyMainBackgroundColor = colorMap.get(colorButton).boxColor;
    studyTextColor = colorMap.get(colorButton).textColor;
    refreshColors(true);
  }

  return (
    <div className="App" style={appStyle}>
      <NavBar/>
      <header>
        <h1>My Pomodoro</h1>
        <ul>
          <li><NormalButton disabled={false} onClick={() => setActiveSection('study')} textColor={mainTextColor} btnColor={mainBackgroundColor} btnName="Study"/></li>
          <li><NormalButton disabled={false} onClick={() => setActiveSection('colors')} textColor={mainTextColor} btnColor={mainBackgroundColor} btnName="Colors"/></li>
          <li><NormalButton disabled={false} onClick={() => setActiveSection('settings')} textColor={mainTextColor} btnColor={mainBackgroundColor} btnName="Settings"/></li>
        </ul>
      </header>
      <div className="main" style={mainStyle}>
        <div 
          className={'section ' + (aSection == 'study' ? 'active' : 'inactive')}
          id="study">
          <p>{workOrBreak} Session #{interval}</p>
          <Timer 
            studying={studying} 
            STUDYLENGTH={studyLength} 
            BREAKLENGTH={breakLength} 
            onTimerEnd={timerEnded} 
            textColor={mainTextColor} 
            btnColor={appBackgroundColor}
            onReset={fullTimerReset}
          />
        </div>
        <div 
          className={'section ' + (aSection == 'colors' ? 'active' : 'inactive')}
          id="colors">
          <p>study colors</p>
          <ul className="colorRow">
            <li><ColorButton onClick={() => setStudyColors('clrbtn1')} mainColor={colorMap.get('clrbtn1').boxColor} backgroundColor={colorMap.get('clrbtn1').backgroundColor}/></li>
            <li><ColorButton onClick={() => setStudyColors('clrbtn2')} mainColor={colorMap.get('clrbtn2').boxColor} backgroundColor={colorMap.get('clrbtn2').backgroundColor}/></li>
            <li><ColorButton onClick={() => setStudyColors('clrbtn3')} mainColor={colorMap.get('clrbtn3').boxColor} backgroundColor={colorMap.get('clrbtn3').backgroundColor}/></li>
            <li><ColorButton onClick={() => setStudyColors('clrbtn4')} mainColor={colorMap.get('clrbtn4').boxColor} backgroundColor={colorMap.get('clrbtn4').backgroundColor}/></li>
          </ul>
          <ul className="colorRow">
            <li><ColorButton onClick={() => setStudyColors('clrbtn5')} mainColor={colorMap.get('clrbtn5').boxColor} backgroundColor={colorMap.get('clrbtn5').backgroundColor}/></li>
            <li><ColorButton onClick={() => setStudyColors('clrbtn6')} mainColor={colorMap.get('clrbtn6').boxColor} backgroundColor={colorMap.get('clrbtn6').backgroundColor}/></li>
            <li><ColorButton onClick={() => setStudyColors('clrbtn7')} mainColor={colorMap.get('clrbtn7').boxColor} backgroundColor={colorMap.get('clrbtn7').backgroundColor}/></li>
            <li><ColorButton onClick={() => setStudyColors('clrbtn8')} mainColor={colorMap.get('clrbtn8').boxColor} backgroundColor={colorMap.get('clrbtn8').backgroundColor}/></li>
          </ul>
          <div className="line-break"></div>
          <p>break colors</p>
          <ul className="colorRow">
            <li><ColorButton onClick={() => setBreakColors('clrbtn1')} mainColor={colorMap.get('clrbtn1').boxColor} backgroundColor={colorMap.get('clrbtn1').backgroundColor}/></li>
            <li><ColorButton onClick={() => setBreakColors('clrbtn2')} mainColor={colorMap.get('clrbtn2').boxColor} backgroundColor={colorMap.get('clrbtn2').backgroundColor}/></li>
            <li><ColorButton onClick={() => setBreakColors('clrbtn3')} mainColor={colorMap.get('clrbtn3').boxColor} backgroundColor={colorMap.get('clrbtn3').backgroundColor}/></li>
            <li><ColorButton onClick={() => setBreakColors('clrbtn4')} mainColor={colorMap.get('clrbtn4').boxColor} backgroundColor={colorMap.get('clrbtn4').backgroundColor}/></li>
          </ul>
          <ul className="colorRow">
            <li><ColorButton onClick={() => setBreakColors('clrbtn5')} mainColor={colorMap.get('clrbtn5').boxColor} backgroundColor={colorMap.get('clrbtn5').backgroundColor}/></li>
            <li><ColorButton onClick={() => setBreakColors('clrbtn6')} mainColor={colorMap.get('clrbtn6').boxColor} backgroundColor={colorMap.get('clrbtn6').backgroundColor}/></li>
            <li><ColorButton onClick={() => setBreakColors('clrbtn7')} mainColor={colorMap.get('clrbtn7').boxColor} backgroundColor={colorMap.get('clrbtn7').backgroundColor}/></li>
            <li><ColorButton onClick={() => setBreakColors('clrbtn8')} mainColor={colorMap.get('clrbtn8').boxColor} backgroundColor={colorMap.get('clrbtn8').backgroundColor}/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
