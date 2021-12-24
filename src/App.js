
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Meals from "./components/Meals";
import MealsInfo from "./components/MealsInfo";
import Result from "./components/Result";
import Search from "./components/Search";
import MealCard from "./components/MealCard";
import Area from "./components/Area";

function App() {
  return (
    <>
     <BrowserRouter>
            <Header/>
         <Routes>

             <Route path="/meals" element={<Meals/>}/>
             <Route path="/" element={<Meals/>}/>
             <Route path="/meals/:id" element={<MealsInfo/>}/>
             <Route path="/search" element={<Search/>}/>
             <Route path="/search/:name" element={<Result/>}/>
             <Route path="/ingredients/:name" element={<MealCard/>}/>
             <Route path="/area/:country" element={<Area/>}/>



         </Routes>
     </BrowserRouter>

    </>
  );
}

export default App;
