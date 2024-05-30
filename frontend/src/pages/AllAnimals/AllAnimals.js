import Search from "../../components/Search";
import style from "./AllAnimals.module.css";
import AnimalPosts from "../../components/PostForm/AnimalPosts";
import { UseGetAllAnimals } from "../../Hook/Action";
import Tab from "../../components/Tab";

export default function AllAnimals() {
  const {
    reverseFilterAnimals,
    handleChange,
    dogs,
    cats,
    birds,
    activeTab,
    setActiveTab,
    searchByName,
    open,
    selectedAnimal,
    handleClose,
    handleOpen,
  } = UseGetAllAnimals();

  return (
    <div className={style.contanier}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 className={style.subheading}>Learn more about your pet friend!</h2>
        <Search onChange={handleChange} value={searchByName} />
      </div>
      <div className={style.tabContanier}>
        <Tab
          text="Dogs"
          active={activeTab === "dogs"}
          onClick={() => setActiveTab("dogs")}
        />
        <Tab
          text="Cats"
          active={activeTab === "cats"}
          onClick={() => setActiveTab("cats")}
        />
        <Tab
          text="Birds"
          active={activeTab === "birds"}
          onClick={() => setActiveTab("birds")}
        />
      </div>
      <div>
        {activeTab === "dogs" && (
          <AnimalPosts
            open={open}
            selectedAnimal={selectedAnimal}
            handleClose={handleClose}
            handleOpen={handleOpen}
            animals={reverseFilterAnimals(dogs)}
            type={"dogs"}
          />
        )}
        {activeTab === "cats" && (
          <AnimalPosts
            animals={reverseFilterAnimals(cats)}
            type="cats"
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
            selectedAnimal={selectedAnimal}
          />
        )}
        {activeTab === "birds" && (
          <AnimalPosts
            animals={reverseFilterAnimals(birds)}
            type="birds"
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
            selectedAnimal={selectedAnimal}
          />
        )}
      </div>
    </div>
  );
}
