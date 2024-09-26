import styles from "../page.module.css";
import Myself from "../assets/myself.png";

export default function QuickDescription() {
    return (
        <>
            <div className={styles.main_header}>
                <div>
                    <h1 className={styles.description}>Hello, my name is Daniel.</h1>
                    <h3 className={styles.additional}>an aspiring Software developer  & Cybersecurity researcher.</h3> 
                </div>
                <div className={styles.photo}>
                    <img src={Myself.src}/>
                </div>
            </div>
        </>
    )
}