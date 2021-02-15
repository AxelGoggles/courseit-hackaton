import styles from '../styles/Home.module.css'
import gatitos from "../data/adoptions";
import ContactForm from '../components/ContactForm'

export default function Home({ gatos, otro }) {

  console.log(gatos)
  console.log(otro)

  return (
      <main className={styles.main}>
        <ContactForm />
      </main>
  );
}

export function getStaticProps() {
  return {
    props: { 
      gatos: gatitos, 
      otro: {key:'value'} 
    },
  };
}
