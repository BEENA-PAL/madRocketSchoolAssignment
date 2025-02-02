import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Academics from "./Pages/Academics/Academics";
import Faculty from "./Pages/Faculty/Faculty";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Students from "./Pages/Students/Students";
import Gallery from "./Pages/Gallery/Gallery";
import GallerySpecific from "./Pages/GallerySpecific/GallerySpecific";
import Admissions from "./Pages/Admissions/Admissions";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/academics" element={<Academics />}></Route>
      <Route path="/faculty" element={<Faculty />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
      <Route path="/students" element={<Students />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/gallery/:id" element={<GallerySpecific />}></Route>
      <Route path="/admissions" element={<Admissions />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
