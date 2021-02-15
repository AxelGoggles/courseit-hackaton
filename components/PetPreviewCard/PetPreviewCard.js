import styles from "./style.module.scss"

function PetPreviewCard(props){

    var imageStyle = {
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1470129913137-0fd7ddb58760?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60" + ")"
      };
      

    return(
    <div className={styles.cardWrapper}>
        <div className={styles.topWrapper}>
            <p className={styles.petName}>Bolin</p>
            <p className={styles.petAge}>3 Años</p>
        </div>
        <div className={styles.bottomWrapper} style={imageStyle}>
        </div>
    </div>
    )
}

export default PetPreviewCard;