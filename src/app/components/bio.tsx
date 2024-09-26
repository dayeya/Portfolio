import WhoAmI from "./whoami"
import Contact from "./contact"
import { Projects, ProjectProps } from "./projects"

import styles from "../page.module.css";

export default function Bi() {
    return (
        <>
            <div className={styles.bio}>
                <WhoAmI/>
                <Projects/>
                <Contact/>  
            </div>
        </>
    )
}