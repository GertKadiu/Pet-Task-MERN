import style from "./CreateAnimla.module.css";
import { useCreateAnimal } from "../../Hook/Action";
import {
  BirdsForm,
  CatsForm,
  DogsForm,
} from "../../components/Forms/InputForms";
import Tab from "../../components/Tab";

export default function CreateAnimal() {
  const {
    formData,
    handleChange,
    image,
    createAnimal,
    filePerc,
    setFile,
    fileUploadError,
    activeTab,
    setActiveTab,
  } = useCreateAnimal();

  return (
    <div className={style.contanier}>
      <div>
        <h2 className={style.subheading}>Add new pets to gallery!</h2>
        <p>Seclect per type: </p>
        <div className={style.tabContanier}>
        <Tab text="Dogs" active={activeTab === 'dogs'} onClick={() => setActiveTab('dogs')} />
        <Tab text="Cats" active={activeTab === 'cats'} onClick={() => setActiveTab('cats')} />
        <Tab text="Birds" active={activeTab === 'birds'} onClick={() => setActiveTab('birds')} />
      </div>
        {activeTab === "dogs" && (
          <DogsForm
            formData={formData}
            onSubmit={createAnimal}
            filePerc={filePerc}
            fileUploadError={fileUploadError}
            handleChange={handleChange}
            setFile={setFile}
            image={image}
          />
        )}

        {activeTab === "cats" && (
          <CatsForm
            formData={formData}
            onSubmit={createAnimal}
            filePerc={filePerc}
            fileUploadError={fileUploadError}
            handleChange={handleChange}
            setFile={setFile}
            image={image}
          />
        )}
        {activeTab === "birds" && (
          <BirdsForm
            formData={formData}
            onSubmit={createAnimal}
            filePerc={filePerc}
            fileUploadError={fileUploadError}
            handleChange={handleChange}
            setFile={setFile}
            image={image}
          />
        )}
      </div>
    </div>
  );
}
