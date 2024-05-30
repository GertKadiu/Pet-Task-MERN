import React from 'react';
import styles from "./PetCart.module.css";
import Button from './Button/Button';
import { ButtonTypes } from './Button/ButtonTypes';
import { Link } from 'react-router-dom';

const PetDetailCard = ({ singleAnimal, id, type, handleDelete }) => {
  return (
    <div className={styles.cart}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className={styles.name}>{singleAnimal.name}</div>
        <div className={styles.border}></div>
        {type === "dogs" && (
          <>
            <div className={styles.space}>
              <span className={styles.span}>Breed group:</span>
              {singleAnimal.breed_group}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Lifespan:</span>
              {singleAnimal.lifespan}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Size:</span>
              {singleAnimal.size}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Colors:</span>
              {singleAnimal.colors}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
          <span className={styles.span}>Origin:</span>
          {singleAnimal.origin}
        </div>
        <div className={styles.border}></div>
        <div className={styles.space}>
          <span className={styles.span}>Temperament:</span>
          {singleAnimal.temperament}
        </div>
          </>
        )}



        {type === "cats" && (
          <>
            <div className={styles.space}>
              <span className={styles.span}>Color:</span>
              {singleAnimal.colors}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
          <span className={styles.span}>Origin:</span>
          {singleAnimal.origin}
        </div>
        <div className={styles.border}></div>
        <div className={styles.space}>
          <span className={styles.span}>Temperament:</span>
          {singleAnimal.temperament}
        </div>
       
          </>
        )}


        
        {type === "birds" && (
          <>
            <div className={styles.space}>
              <span className={styles.span}>Species:</span>
              {singleAnimal.species}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Family:</span>
              {singleAnimal.family}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Habitat:</span>
              {singleAnimal.habitat}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Place of found:</span>
              {singleAnimal.place_of_found}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Diet:</span>
              {singleAnimal.diet}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Weight (kg):</span>
              {singleAnimal.weight_kg}
            </div>
            <div className={styles.border}></div>
            <div className={styles.space}>
              <span className={styles.span}>Height (cm):</span>
              {singleAnimal.height_cm}
            </div>
          </>
        )}
       
        <div className={styles.border}></div>
        <label className={styles.label}>Description:</label>
        <div className={styles.description}>{singleAnimal.description}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <Button
            btnText="Delete"
            type={ButtonTypes.DELETE}
            onClick={handleDelete}
          />
          <Link to={`/${type}/update/${id}`}>
            <Button btnText="Edit" type={ButtonTypes.EDIT} />
          </Link>
        </div>
      </div>
      <div>
        <img src={singleAnimal.image} alt={`${type}`} className={styles.img} />
      </div>
    </div>
  );
};

export default PetDetailCard;
