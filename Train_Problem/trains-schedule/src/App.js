
import Navbar from './Components/Navbar';
import TrainSchedule from './Components/TrainSchedule';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteTrain from './Components/FavouriteTrain';

function App() {
  return (
    <BrowserRouter>

    <Navbar />
    <Routes>
      <Route path="/" element=
        {
          <>
            <TrainSchedule />
            
          </>
        }>
      </Route>
      
      <Route path="fav" element={<FavouriteTrain />}></Route>
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
