import Authentication from './pages/Authentication';
import Landing from './pages/Landing';
import AddRecipe from './pages/AddRecipe';

import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopping from './pages/Shopping';
import Calendar from './components/calender';
import AddCalenderEvent from './components/calendaradd';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/calendar" element={<Calendar />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
