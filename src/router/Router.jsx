import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Crew from "../pages/Crew"
import Destination from "../pages/Destination"
import Technology from "../pages/Technology"


const Router =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/crew" element={<Crew/>}/>
            <Route path="/destination" element={<Destination/>}/>
            <Route path="/technology" element={<Technology/>}/>
        </Routes>
    )

}
export default Router