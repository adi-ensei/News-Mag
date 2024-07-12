import { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";

// import Navbar from "./Components/Navbar";
const App = () => {
  const [category, setCategory] = useState("");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
};

export default App;
