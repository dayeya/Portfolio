import styles from "../page.module.css";

export default function Links() {
    return (
        <>
            <div className={styles.whoami}>
                <div className={styles.bio_header}>About</div>
                <p className={styles.text}>
                    My name is Daniel Sapojnikov.
                    I am an 18 year old who enjoys building projects 
                    and researching cybersecurity areas - especially the Web. 
                    I am always aiming to extend my knowledge, adapt, overcome and grow.
                    I am a bigtraveler, nature lover and music enthusiast.
                </p>
            </div>
        </>
    )
}