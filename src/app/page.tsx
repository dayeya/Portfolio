import styles from "./page.module.css";

import CVButton from "./components/cv";
import QuickDescription from "./components/header";
import Links from "./components/links";
import Bio from "./components/bio";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <QuickDescription/>
        <Bio/>
      </main>
    </div>
  );
}
