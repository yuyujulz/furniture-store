import "../index.scss"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Armchair from "../images/Background-transparent.png"
//import Contact from "../components/Contact"
import { Link } from "react-router-dom"


function Homepage () {
    return(
        <>

        <Navbar/>
            <div className="header">

                <div className="header-text" >
                    <h1>Home <br/> of <br/> <div className="word-jouna"> JOUNA</div></h1>
                    <p>We offer a curated collection of contemporary furniture 
                        pieces that effortlessly blend form and function. From sleek  
                        minimalist designs to bold statement pieces, selection 
                        caters to discerning individuals seeking high-quality, stylish 
                        furniture <br/>for their homes or offices.
                    </p>
                   <Link to="/collection"> <button className="btn">Check our Collection</button></Link>
                </div>
                <div>
                <img src={Armchair} alt="chair" className="armchair"/>
                </div>

            </div>
        <Footer/>

        </>
    )
}
export default Homepage;