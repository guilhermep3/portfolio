import styles from "./page.module.css";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Hero/>
    </div>
  );
}
