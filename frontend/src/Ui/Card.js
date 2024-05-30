import React from "react";
import styles from "./card.module.css";

const Card = ({ onClick, animal, type }) => {
  const renderDetails = () => {
    switch (type) {
      case "dogs":
        return (
          <>
            <div className={styles.breed}>
              {animal.breed_group}
            </div>
          </>
        );
      case "cats":
        return (
          <>
            <div className={styles.origin}> {animal.origin}</div>
          </>
        );
      case "birds":
        return (
          <>
            <div className={styles.specie}> {animal.species}</div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div onClick={onClick} className={styles.card}>
      <img src={animal.image} alt={animal.name} className={styles.img} />
      <div className={styles.contanier}>
        <div className={styles.name}>{animal.name}</div>
        <div className={styles.data}>
          <div className={styles.specie}>{renderDetails()}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
