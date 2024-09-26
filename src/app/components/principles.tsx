"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

export default function Principles() {
    const words = [
        "Nature",
        "Music",
        "Tech",
        "Growth",
        "Learn",
        "Adapt",
        "Overcome"
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            
            setTimeout(() => {
                setCurrentWordIndex(prev => (prev + 1) % words.length);
                setFade(true);
            }, 500);
        }, 2750);

        return () => clearInterval(interval);
    }, [words.length]);

    return <div className={`${styles.principle} ${fade ? styles.fadeIn : styles.fadeOut}`}>{ words[currentWordIndex] }</div>
}