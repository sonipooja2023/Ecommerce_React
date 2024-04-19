import react from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement.jsx";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home(){

    return (
         <div> 
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Footer/>
         </div>
    )
}
export default Home;