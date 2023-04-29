import "../index.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Armchair from "../images/Background-transparent.png"


function Homepage () {
    return(
        <>

        <Navbar/>
            <div className="header">

                <div className="header-text" >
                    <h1>Home of <span>JOUNA</span></h1>
                    <p>Aliquam sit amet neque tempor, 
                    efficitur lorem id, <br/>
                    rhoncus velit.In hac habitasse platea dictumst. 
                    <br/>
                    Nunc at interdum tellus. Proin maximus
                    <br/>
                    nibh a fermentum semper.
                    </p>
                    <button className="btn">Check our Collection</button>
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