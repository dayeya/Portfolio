import React from "react";
import styles from "../page.module.css";
import Bamboo from "./bamboo";

export default function Links() {
    return (
        <>
            <div className={styles.projects}>
                <div className={styles.bio_header}>Projects</div>
                <div className={styles.projects_con}>
                    <div className={styles.project}>
                        <Bamboo/>
                        <div className={styles.name}>Web Application Firewall engine</div>
                    </div>
                </div>
            </div>
        </>
    )
}