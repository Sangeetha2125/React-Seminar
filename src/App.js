import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example1 from "./Hooks/Example1";
import Example2 from "./Hooks/Example2";
import Example3 from "./Hooks/Example3";
import Example4 from "./Hooks/Example4";
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Example1 />
      <Routes>
        <Route path="/posts" element={<Example3 />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
