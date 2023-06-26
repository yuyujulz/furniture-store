import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AddItem from "../components/AddItem"
import Backdrop from "../components/Backdrop"

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
// import Breadcrumbs from "../components/Breadcrumps"

function Collection(props) {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false);
  

   
  
    useEffect(() => {
        axios
        .get(`${API_URL}/api/items`)
        .then((response) => {
            setItems(response.data);
            console.log(response.data);
        })
        .catch((err) => console.log("There is an error", err));
    }, []);


    function openAddItemForm(){
        setShowModal(true)
      }

    function closeAddItemForm(){
        setShowModal(false)
    }

    return(
        <>

            <Navbar/>
            
                <div>
                    
                    <div>
                        <button className="btn addBtn" onClick={openAddItemForm}>+</button>
                        {showModal && <AddItem onCancel={closeAddItemForm}/>}
                        {showModal && <Backdrop onCancel={closeAddItemForm}/>}
                    </div>

                    <div className="allCollection">
                        {items.map((item) => {
                            return (
                                <div className="card">
                                    <div className="card-content">
                                    <Link to={`/item/${item._id}`} className="infoOnCard">
                                        <img src={item.imageUrl} alt="furniture-img" />
                                        
                                        <p >{item.title}</p>
                                        <span >£{item.price}</span>
                                        <br/>
                                        <button className="btn">Deets</button>
                                    </Link>
                                    </div>
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