import React, { useEffect } from 'react'
import { useState } from 'react'
import NormalButton from './NormalButton';

interface Props{
  textColor: string;
  btnColor: string;
  onTimerEnd: () => void;
  onReset: () => void;
  STUDYLENGTH: number;
  BREAKLENGTH: number;
  studying: boolean;
}

const Timer: React.FC<Props> = ({studying, textColor, btnColor, STUDYLENGTH, BREAKLENGTH, onTimerEnd, onReset}) => {
  
  const [secCount, setSecCount] = useState<number>(0);
  const [minCount, setMinCount] = useState<number>(STUDYLENGTH);
  const [tensPlace, setTensPlace] = useState<string>("0");
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalID: NodeJS.Timeout | undefined;

    if (isRunning && (secCount || minCount)) { //if it is running:
      intervalID = setInterval(second, 5);
    }

    if (secCount === 0 && minCount === 0){ //when the timer ends
      console.log('timer ended');
      setIsRunning(false);
      clearInterval(intervalID);
      onTimerEnd();
      studying ? goBreak() : goStudy();
    }

    return () => { //this is standard for a useEffect hook, but should not be used
      if (intervalID !== undefined) {
        clearInterval(intervalID);
      }
    };
  }, [isRunning, secCount, studying]);
  
  const second = () => {
    if (secCount === 0){
      if (minCount === 0){
        console.log('restarting');
      }
      else {
        setSecCount(59);
        displaySec();
        minute();
      }
    } else {
      setSecCount((secCount) => secCount - 1);
      displaySec();
    }
    
  };

  const minute = () => {
    setMinCount((minCount) => minCount - 1);
  };

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    stop;
    
    if ((studying &&((minCount == 25) && (secCount == 0))) || (!studying &&((minCount == 5) && (secCount == 0)))){
      //case where it has already been pressed and needs to be fully reset:
      onReset();
    }
    setMinCount(studying ? STUDYLENGTH:BREAKLENGTH);
    setSecCount(0);
    displaySec();
  }

  const displaySec = () => {
    if (secCount < 10){
      setTensPlace("0");
    } else {
      setTensPlace("");
    }
  };

  const goBreak = () => {
    console.log('going break');
    setMinCount(BREAKLENGTH);
    setSecCount(0);
    displaySec;
  }

  const goStudy = () => {
    console.log('going study');
    setMinCount(STUDYLENGTH);
    setSecCount(0);
    displaySec;
  }

  return (
    <>
      <div>{minCount}:{tensPlace}{secCount}</div>
      <ul> 
        <li><NormalButton disabled={isRunning} onClick={start} textColor={textColor} btnColor={btnColor} btnName="Start"/></li>
        <li><NormalButton disabled={!isRunning} onClick={stop} textColor={textColor} btnColor={btnColor} btnName="Stop"/></li>
        <li><NormalButton disabled={false} onClick={reset} textColor={textColor} btnColor={btnColor} btnName="Reset"/></li>
      </ul>
    </>
  )
}

export default Timer