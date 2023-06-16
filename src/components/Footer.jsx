import * as React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div className="footer">
            <footer>
                 <div >
                    <ul>
                        <li><Link className="navLinks" to="#">Home</Link></li>
                        <li><Link className="navLinks" to="#">Collection</Link></li>
                        <li><Link className="navLinks" to="#">About Us</Link></li>
                    </ul>
                </div>
                <div className="socials socialsDiv">

                    <Link className="socials" to="#"><img src="#" alt="instagram" /></Link>
                    <Link className="socials"  to="#"><img src="#" alt="facebook" /></Link>
                    <Link className="socials"  to="#"><img src="#" alt="linkedin" /></Link>
                    
               
               
                <span className="allRights">All rights are reserved by JOUNA Ltd. 2023</span>
                </div>
            </footer>
        </div>
    )
}
export default Footer