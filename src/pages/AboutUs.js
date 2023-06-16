import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function AboutUs() {
    return(
        <div className="about-us">

            <Navbar/>
                <div className="aboutUs-txt">

                    <h1 className="h1-collection ">About Us</h1>
                    <p className="aboutUs-p">
                        Welcome to JOUNA! <br/>

                        Discover furniture that brings style, comfort, and personality to your home. At JOUNA, we handpick high-quality pieces that stand the test of time.
                        Our collection includes sofas, dining sets, and statement pieces to suit every taste.

                        With 10 years of experience, we provide personalized guidance to make your furniture shopping enjoyable and stress-free. Our friendly team is here 
                        to assist you with coordinating colors, space planning, and product features.

                        We prioritize sustainability by sourcing furniture produced using eco-friendly practices and materials whenever possible. Join us in supporting 
                        responsible manufacturing and creating a more sustainable future.

                        Visit our showroom or shop online for a seamless experience. Let JOUNA be a part of your furniture journey, transforming your living spaces into inspiring havens.</p>

                </div>
            <Footer/>

        </div>
    )
}

export default AboutUs;