import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SignUp from "../components/SignUp"
import LogIn from "../components/LogIn"
import "../index.scss"

function Login(){
    return(
        <div>
            <Navbar/>
                <div className="loginSignup">
                    <SignUp/>
                    <LogIn/>
                </div>
                
                
            <Footer/>
            
        </div>
    )
}

export default Login;