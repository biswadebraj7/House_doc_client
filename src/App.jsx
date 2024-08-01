
import { Outlet } from "react-router-dom"
import Navabr from "./Navbar/Navabr"
import Footer from "./Pages/Footer"



function App() {



  return (
    <>
    <div className="bg-[#07332F]">
      <Navabr></Navabr>

     
    </div>
 
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
