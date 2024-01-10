import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import "./index.css";
import Navbar from "./components/navbar";
import { useState } from "react";
import { SelectedP } from "./shared/types";

const App = () => {
  const [selectedP, setSelectedP] = useState<SelectedP>(SelectedP.Home);
  return (
    <>
      <div className="app bg-black h-screen">
        <Navbar selectedP={selectedP} setSelectedP={setSelectedP} />
      </div>
    </>
  );
};
export default App;
