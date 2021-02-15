import styles from "./style.module.scss"

function PetPreviewCard({name, age, photo}){



    var imageStyle = {
        backgroundImage: "url(" + {photo} + ")"
      };
      

    return(
    <div className={styles.cardWrapper}>
        <div className={styles.topWrapper}>
            <p className={styles.petName}>{name}</p>
            <p className={styles.petAge}>{age}</p>
        </div>
        <div className={styles.bottomWrapper}>
            <img src={photo} className={styles.petPhoto}/>
        </div>
    </div>
    )
}

export default PetPreviewCard;