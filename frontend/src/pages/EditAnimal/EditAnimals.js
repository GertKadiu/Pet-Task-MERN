import { useEditAnimals } from "../../Hook/Action";
import { BirdsForm, CatsForm, DogsForm } from "../../components/Forms/InputForms";
import style from "./EditAnimals.module.css"

export default function EditAnimals() {
  const {
    setFile,
    filePerc,
    EditAnimal,
    fileUploadError,
    formData,
    image,
    handleChange,
    type,
  } = useEditAnimals();

  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center" ,marginTop: "90px", marginBottom:"30px" }}>
      <h2  className={style.subheading}>Edit your pets!</h2>
      {type === "birds" && <BirdsForm
          formData={formData}
          onSubmit={EditAnimal}
          filePerc={filePerc}
          fileUploadError={fileUploadError}
          handleChange={handleChange}
          setFile={setFile}
          image={image}
        />}
      {type === "cats" && <CatsForm
          formData={formData}
          onSubmit={EditAnimal}
          filePerc={filePerc}
          fileUploadError={fileUploadError}
          handleChange={handleChange}
          setFile={setFile}
          image={image}
        />}
      {type === "dogs" && (
        <DogsForm
          formData={formData}
          onSubmit={EditAnimal}
          filePerc={filePerc}
          fileUploadError={fileUploadError}
          handleChange={handleChange}
          setFile={setFile}
          image={image}
        />
      )}
    </div>
  );
}
