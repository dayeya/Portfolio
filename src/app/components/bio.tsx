import styles from "../page.module.css";
import WhoAmI from "./whoami"
import Projects from "./projects"
import Contact from "./contact"

export default function Links() {
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