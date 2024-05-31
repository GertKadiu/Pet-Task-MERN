import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import AllAnimals from "./pages/AllAnimals/AllAnimals";
import AboutUs from "./pages/AboutUs/AboutUs";
import EditAnimals from "./pages/EditAnimal/EditAnimals";
import ContactUs from "./pages/ContactUs/ContactUs";
import CreateAnimal from "./pages/CreateAnimal/CreateAnimal";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<AllAnimals />} />
        <Route path="/:type/update/:id" element={<EditAnimals />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/create" element={<CreateAnimal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
