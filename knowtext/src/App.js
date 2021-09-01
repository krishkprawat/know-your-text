import Navbar from "./components/Navbar";
import "./App.css";
//import Textform from "./components/Textform";

import About from "./components/about";
function App() {
  return (
    <>
      <Navbar title="Know-your-Text" />
      <div className="container my-3">
        <About />
      </div>
    </>
  );
}

export default App;
