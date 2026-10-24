'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(50);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const prevSeconds = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev+1 === 60) {
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
  }, [seconds])

  return (
    <div className={styles.timer}>
      <h1>{minutes} : {seconds}</h1>
      <button className={styles.utilityButton} onClick={() => {
        isRunning ? setIsRunning(false) : setIsRunning(true)
      }}>Start</button>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Pandoro</h1>
      <Timer />
    </div>
  );
}