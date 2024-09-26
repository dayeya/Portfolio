import styles from "./page.module.css";

import Bio from "./components/bio";
import QuickDescription from "./components/header";

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