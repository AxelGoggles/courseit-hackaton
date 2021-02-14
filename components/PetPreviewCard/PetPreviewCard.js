import styles from "./style.module.scss"

function PetPreviewCard(props){

    return(
    <div className={styles.cardWrapper}>
        <div className="topWrapper">
            <p className="petName"></p>
            <p className="petAge">Bolin</p>
        </div>
        <div className="bottomWrapper">
        </div>
    </div>
    )
}

export default PetPreviewCard;