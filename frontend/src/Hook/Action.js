import axios from "axios";
import { useEffect, useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { storage } from "../Firebase/Firebase";
import { useNavigate, useParams } from "react-router-dom";

export const useCreateAnimal = () => {
  const [activeTab, setActiveTab] = useState("dogs");

  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState("");
  const [image, setImage] = useState("");
  const { type } = useParams();
  const [dogsFormData, setDogsFormData] = useState({
    name: "",
    origin: "",
    temperament: "",
    colors: "",
    description: "",
    image: "",
  });
  const [catsFormData, setCatsFormData] = useState({
    name: "",
    breed_group: "",
    size: "",
    lifespan: "",
    origin: "",
    temperament: "",
    colors: "",
    description: "",
    image: "",
  });
  const [birdsFormData, setBirdsFormData] = useState({
    name: "",
    description: "",
    image: "",
    weight_kg: "",
    height_cm: "",
    place_of_found: "",
    habitat: "",
    family: "",
    species: "",
    diet: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (activeTab) {
      case "dogs":
        setDogsFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        break;
      case "cats":
        setCatsFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        break;
      case "birds":
        setBirdsFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.error("Error uploading image:", error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setImage(downloadURL)
        );
      }
    );
  };

  const formData =
    activeTab === "dogs"
      ? dogsFormData
      : activeTab === "cats"
      ? catsFormData
      : birdsFormData;

  const createAnimal = async (e) => {
    e.preventDefault();

    try {
      const data = {
        ...formData,
        image,
      };

      let endpoint;
      switch (activeTab) {
        case "dogs":
          endpoint = "dogs/createDog";
          break;
        case "cats":
          endpoint = "cats/createCat";
          break;
        case "birds":
          endpoint = "birds/createBird";
          break;
        default:
          break;
      }

      const apiKey = process.env.REACT_APP_API_KEY;
      const res = await axios.post(`${apiKey}/${endpoint}`, data);
      const responseData = res.data;

      if (!responseData.success) {
        console.error("Error creating animal:", responseData.message);
        return;
      }
      navigate("/");
    } catch (error) {
      console.error("Error creating animal:", error);
    }
  };

  return {
    formData,
    handleChange,
    image,
    createAnimal,
    activeTab,
    setActiveTab,
    filePerc,
    setFile,
    fileUploadError,
    type,
  };
};

export const useEditAnimals = () => {
  const [file, setFile] = useState(null);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    breed_group: "",
    size: "",
    lifespan: "",
    origin: "",
    temperament: "",
    colors: "",
    description: "",
    image: "",
    weight_kg: "",
    height_cm: "",
    place_of_found: "",
    habitat: "",
    family: "",
    species: "",
    diet: "",
  });
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id, type } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  const getAnimalEndpoint = `${apiKey}/${type}/${id}`;
  const updateAnimalEndpoint = `${apiKey}/${type}/update${type}/${id}`;

  useEffect(() => {
    axios
      .get(getAnimalEndpoint)
      .then((result) => {
        setFormData({
          name: result.data.name,
          weight_kg: result.data.weight_kg,
          height_cm: result.data.height_cm,
          description: result.data.description,
          place_of_found: result.data.place_of_found,
          habitat: result.data.habitat,
          family: result.data.family,
          species: result.data.species,
          diet: result.data.diet,
          colors: result.data.colors,
          temperament: result.data.temperament,
          origin: result.data.origin,
          size: result.data.size,
          lifespan: result.data.lifespan,
          breed_group: result.data.breed_group,
        });
        setImage(result.data.image);
      })
      .catch((err) => console.log(err));
  }, [getAnimalEndpoint]);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileUpload = (file) => {
    const storage = getStorage();
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.error("Error uploading image:", error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setImage(downloadURL)
        );
      }
    );
  };

  const EditAnimal = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        image,
      };

      const res = await axios.put(updateAnimalEndpoint, data);
      const responseData = res.data;

      if (responseData.success === false) {
        console.error("Error updating animal:", responseData.message);
        return;
      }
      navigate("/");
    } catch (error) {
      console.error("Error updating animal:", error);
    }
  };

  return {
    setFile,
    filePerc,
    EditAnimal,
    fileUploadError,
    formData,
    image,
    handleChange,
    type,
  };
};

export const UseGetAllAnimals = () => {
  const [searchByName, setsearchByName] = useState("");
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [activeTab, setActiveTab] = useState("dogs");
  const { type } = useParams();

  const [open, setOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleOpen = (animal) => {
    setSelectedAnimal(animal);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsResponse = await axios.get(`${apiKey}/dogs/`);
        setDogs(dogsResponse.data);

        const catsResponse = await axios.get(`${apiKey}/cats/`);
        setCats(catsResponse.data);

        const birdsResponse = await axios.get(`${apiKey}/birds/`);
        setBirds(birdsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [apiKey]);

  const handleChange = (e) => {
    setsearchByName(e.target.value);
  };

  const filterAnimals = (animals) =>
    animals.filter((animal) =>
      animal.name.toLowerCase().includes(searchByName.toLowerCase())
    );

  const reverseFilterAnimals = (animals) => filterAnimals(animals).reverse();

  return {
    reverseFilterAnimals,
    handleChange,
    dogs,
    cats,
    birds,
    activeTab,
    setActiveTab,
    searchByName,
    type,
    open,
    selectedAnimal,
    handleClose,
    handleOpen,
  };
};
