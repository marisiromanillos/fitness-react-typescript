import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import "./index.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="app bg-black h-screen">
        <Navbar />
      </div>
    </>
  );
}

export default App;
