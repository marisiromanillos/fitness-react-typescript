import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import "./index.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Benefits from "./components/benefits";
import OurClasses from "./components/ourClasses";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer/indext";
import { useEffect, useState } from "react";
import { SelectedP } from "./shared/types";
 

const App = () => {
  const [selectedP, setSelectedP] = useState<SelectedP>(SelectedP.Home);
  const [topPage, setTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopPage(true);
        setSelectedP(SelectedP.Home);
      }
      if (window.scrollY !== 0) setTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-black h-screen">
        <Navbar
          topPage={topPage}
          selectedP={selectedP}
          setSelectedP={setSelectedP}
        />
        <Home setSelectedP={setSelectedP} />
        <Benefits setSelectedP={setSelectedP}/>
        <OurClasses setSelectedP={setSelectedP}/>
        <ContactUs setSelectedP={setSelectedP} />
        <Footer />
      </div>
    </>
  );
};
export default App;
