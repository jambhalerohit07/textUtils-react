import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";

function App() {
  return (
    <>
      <Navbar title="textUtils" />
      <div className="container my-3">
        <Textarea heading="Enter text below to analyze" />
      </div>

      {/* <Navbar/>  */}
    </>
  );
}

export default App;
