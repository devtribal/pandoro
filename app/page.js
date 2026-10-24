'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0); // for testing; change later to 0
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const prevSeconds = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev + 1 === 60) {
          return 0;
        }

        return prev + 1;
      });     
    }, 1000)

    return () => {
      clearInterval(id);
    }
  }, [isRunning]);

  useEffect(() => {
    if (prevSeconds.current === 59 && seconds === 0) {
      setMinutes(prev => prev + 1);
    } 
    prevSeconds.current = seconds;
  }, [seconds]);

  function reset() {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
    prevSeconds.current = 0;
  }

  const secondsDisplay = String(seconds).padStart(2, "0");
  const minutesDisplay = String(minutes).padStart(2, "0");
  const toggleButtonDisplay = isRunning ? "Stop" : "Start";

  return (
    <div className={styles.timerWrap}>
      <h1 className={styles.timer} >{minutesDisplay} : {secondsDisplay}</h1>
      <div className={styles.utilityButtonWrapper}>
        <button className={styles.utilityButton} onClick={() => {
          isRunning ? setIsRunning(false) : setIsRunning(true)
        }}>{toggleButtonDisplay}</button>
        <button className={styles.utilityButton} onClick={reset}>Reset</button>
      </div>
    </div >
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Timer />
    </div>
  );
}