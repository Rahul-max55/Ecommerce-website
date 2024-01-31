import "./App.css";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import About from "./about/About";
import Contact from "./contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login_Signup from "./Login_Signup/Login_Signup";
import NoteContext from "./Contexts/NoteContext";
import Single_page from "./Single_page/Single_page";
import Add_To_Cart from "./Add_Cart/Add_To_Cart";
import Main_Products_page from "./AllProduct/Main_Products_page";
import FilterNoteContext from "./Filter_Context/FilterNoteContext";
import Cart_Note_Context from "./Add_Cart/Cart_Context/Cart_Note_Context";


const App = () => {
  return (
    <>
      <NoteContext>
        <FilterNoteContext>
          <Cart_Note_Context>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login_signup" element={<Login_Signup />} />
                <Route path="/singleproduct/:id" element={<Single_page />} />
                <Route path="/Main_Products_page" element={<Main_Products_page />} />
                <Route path="/Add_to_cart" element={<Add_To_Cart />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </Cart_Note_Context>
        </FilterNoteContext>
      </NoteContext>

    </>
  )
}


export default App;