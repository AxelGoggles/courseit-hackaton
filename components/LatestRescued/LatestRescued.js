
import PetPreviewCard from "../PetPreviewCard";
import styles from "./LatestRescued.module.scss";
import AdoptionForm from '../AdoptionForm'

const LatestRescued = ({ data }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nuestros ultimos amiguitos rescatados</h2>

      <div className={styles.cards_container}>
        {data.map((animal) => (
          <PetPreviewCard
            name={animal.name}
            age={animal.age}
            photo={animal.photo}
          />
        ))}
      </div>

      <AdoptionForm />
    </section>
  );
};

export default LatestRescued;
