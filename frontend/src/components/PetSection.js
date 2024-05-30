import React from "react";
import styles from "./PetSection.module.css";
import { Link } from "react-router-dom";
import { ButtonTypes } from "../Ui/Button/ButtonTypes";
import Button from "../Ui/Button/Button";

const PetSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContanier}>
          <div>
            <h2 className={styles.subheading}>
              Learn more about your pet friend!
            </h2>
            <h1 className={styles.heading}>Pet's World</h1>
            <Link className={styles.Link} to={"/animals"}>
              <Button btnText='Open gallery' type={ButtonTypes.OPEN} />
            </Link>
          </div>

          <div className={styles.categories}>
           
              <div className={styles.category}>
                <img
                  src="/assets/cats.png"
                  alt="Cats"
                  className={styles.image}
                />
                <div className={styles.categoryContent}>Cats</div>
              </div>
       
            
              <div className={styles.category}>
                <img
                  src="/assets/dog.png"
                  alt="Dogs"
                  className={styles.image}
                />
                <div className={styles.categoryContent}>Dogs</div>
              </div>
   
              <div className={styles.category}>
                <img
                  src="/assets/bird.webp"
                  alt="Birds"
                  className={styles.image}
                />
                <div className={styles.categoryContent}>Birds</div>
              </div>
   
          </div>
        </div>
        <img className={styles.petImage} src="/assets/footer.webp" alt="Pets" />
      </div>
    </>
  );
};

export default PetSection;
