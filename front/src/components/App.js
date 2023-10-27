import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import StudentPage from "../pages/StudentPage/StudentPage";

import HwisungWorldPage from "../pages/StudentPage/HwisungWorldPage";
import HyaeSunWorldPage from "../pages/StudentPage/HyaeSunWorldPage";
import SunminWorldPage from "../pages/StudentPage/SunminWorldPage";
import SiwooWorldPage from "../pages/StudentPage/SiwooWorldPage";
import SoyeonWorldPage from "../pages/StudentPage/SoyeonWolrdPage";
import SiyeonWorldPage from "../pages/StudentPage/SiyeonWorldPage";
import WonheeWorldPage from "../pages/StudentPage/WonheeWorldPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/student" element={<StudentPage />}></Route>
          <Route path="/HwisungWorld" element={<HwisungWorldPage />}></Route>
          <Route path="/HyaeSunWorld" element={<HyaeSunWorldPage />}></Route>
          <Route path="/SoyeonWorld" element={<SoyeonWorldPage />}></Route>
          <Route path="/SiyeonWorld" element={<SiyeonWorldPage />}></Route>
          <Route path="/SunminWorld" element={<SunminWorldPage />}></Route>
          <Route path="/WonheeWorld" element={<WonheeWorldPage />}></Route>
          <Route path="/SiwooWorld" element={<SiwooWorldPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
