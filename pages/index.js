import styles from '../styles/Home.module.css'
import gatitos from "../data/adoptions";
import Hero from "../components/Hero";
import LatestRescued from "components/LatestRescued";
import ContactForm from "components/ContactForm";

export default function Home({ gatos }) {
  console.log(gatos);

  return (
    <main className={styles.main}>
      <Hero />
      <LatestRescued data={gatos} />
      <ContactForm />
    </main>
  );
}

export function getStaticProps() {
  return {
    props: {
      gatos: gatitos.slice(0, 3),
    },
  };
}
