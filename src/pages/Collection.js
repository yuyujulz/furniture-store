import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AddItem from "../components/AddItem"

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
// import Breadcrumbs from "../components/Breadcrumps"

function Collection(props) {
    const [items, setItems] = useState([])
  
    useEffect(() => {
        axios
        .get(`${API_URL}/api/items`)
        .then((response) => {
            setItems(response.data);
            console.log(response.data);
        })
        .catch((err) => console.log("There is an error", err));
    }, []);


    return(
        <>

            <Navbar/>
            
                <div>
                    
                    <h1 className="h1-collection">Collection</h1>

                {/* <Breadcrumbs /> */} <AddItem/>
                

                    <div className="allCollection">
                        {items.map((item) => {
                            return (
                                <div className="card">
                                    <Link to={`/item/${item._id}`}>
                                        <img src={item.imageUrl} alt="furniture-img" />
                                        <p>{item.title}</p>
                                        <span>£{item.price}</span>
                                        <br/>
                                        <button className="btn">Item details</button>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
            <Footer/>
            </div>
        </>
    )
}

export default Collection;