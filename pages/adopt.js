import styles from "../styles/adopt.module.scss"
import gatitos from "../data/adoptions";
import PetPreviewCard from "../components/PetPreviewCard/PetPreviewCard"

function AdoptPage({gatos}) {


    return (

        <div className={styles.mainWrapper}>
            {gatos.map((gato)=>
                    <PetPreviewCard name={gato.name} age={gato.age} photo={gato.photo}/>
            )}
        </div>

    )
}

export function getStaticProps() {
    return {
      props: { 
        gatos: gatitos
      }
    };
  }
  

export default AdoptPage;