import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="Know-your-Text" />
      <div className="container my-3">
        <Textform heading="Enter your text" />
      </div>
    </>
  );
}

export default App;
