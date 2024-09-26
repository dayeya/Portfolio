import styles from "../page.module.css";
import Github from "./github";
import LinkedIn from "./linkdin";
import Gmail from "./mail";
import Principles from "./principles";

export default function Links() {
    return (
        <>
            <div className={styles.contact}>
                <div className={styles.bio_header}>Socials</div>
                <div>
                    <p className={styles.socials_text}>
                    If you believe that I am suited for your company I would be more than happy to work for you.
                    feel free to review my resume or send me an email.
                    </p>
                </div>
                <ul className={styles.social_links}>
                    <li><Gmail/></li>
                    <li><Github/></li>
                    <li><LinkedIn/></li>
                    <li><Principles/></li>
                </ul>
            </div>
        </>
    )
}