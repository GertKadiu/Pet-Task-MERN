import { useEffect } from "react";
import Card from "../../Ui/Card";
import BasicModal from "../Modal/Modal";
import styles from "./AnimalPost.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


export default function AnimalPost({
  animals,
  type,
  open,
  selectedAnimal,
  handleClose,
  handleOpen,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({  once: true }); 
  }, []);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleDelete = async () => {
    try {
      let deleteEndpoint;
      switch (type) {
        case "birds":
          deleteEndpoint = `${apiKey}/birds/deleteBird/${selectedAnimal._id}`;
          break;
        case "dogs":
          deleteEndpoint = `${apiKey}/dogs/deleteDog/${selectedAnimal._id}`;
          break;
        case "cats":
          deleteEndpoint = `${apiKey}/cats/deleteCat/${selectedAnimal._id}`;
          break;
        default:
          return;
      }

      await axios.delete(deleteEndpoint);
      alert("Post deleted successfully");

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {type === "cats" && (
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className={styles.grid}
        >
          {animals.map((animal) => (
            <Card
              key={animal._id}
              type={type}
              onClick={() => handleOpen(animal)}
              animal={animal}
            />
          ))}
        </div>
      )}
      {type === "dogs" && (
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className={styles.grid}
        >
          {animals.map((animal) => (
            <Card
              key={animal._id}
              type={type}
              onClick={() => handleOpen(animal)}
              animal={animal}
            />
          ))}
        </div>
      )}
      {type === "birds" && (
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className={styles.grid}
        >
          {animals.map((animal) => (
            <Card
              key={animal._id}
              type={type}
              onClick={() => handleOpen(animal)}
              animal={animal}
            />
          ))}
        </div>
      )}
      {selectedAnimal && (
        <BasicModal
          open={open}
          handleClose={handleClose}
          singleAnimal={selectedAnimal}
          handleDelete={handleDelete}
          type={type}
          id={selectedAnimal._id}
        />
      )}
    </div>
  );
}
