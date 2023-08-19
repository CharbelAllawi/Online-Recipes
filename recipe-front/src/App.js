import Authentication from './pages/Authentication';
import Landing from './pages/Landing';
import AddRecipe from './pages/AddRecipe';

import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/addrecipe" element={<AddRecipe />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
