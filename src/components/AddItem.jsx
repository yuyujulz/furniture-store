/* eslint-disable */
import "../index.scss"
import { useState } from "react";
import service from "../api/service";


const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";


export default function AddItem(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(1);
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
  /* eslint-enable */ 
  const closeHandler = () => { props.onCancel() }
  
    function handleFileUpload(e){
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);
      service
        .uploadImage(uploadData)
        .then((response) => {
          setImageUrl(response.fileUrl);
        })
        .catch((err) => console.log("Error while uploading the file: ", err));
    };
  
    function handleSubmit(e){
      e.preventDefault();
  
      service
        .createItem({
          title,
          description,
          brand,
          price,
          stock,
          imageUrl,
          category,
        })
        .then((res) => {
          setTitle("");
          setBrand("");
          setDescription("");
          setPrice(0);
          setStock(0);
          setImageUrl("");
          setCategory("");
          alert("Item been added!");
          closeHandler()
        })
        .catch((err) => console.log("Error while adding the new item: ", err));
    };

    

    // const closeHandler = () => { props.onCancel() }

   
    return(
        <>

      <div className="addItemDiv">
        <form onSubmit={handleSubmit} className="addItemForm">

        
          {/* ADD ITEM INFO */}
          <div className="addTitle addItem">
            <label>Title</label>
            <input
              className="title"
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <label>Brand</label>
            <input
              type="text"
              className="brand"
              name="brand"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
            />

            <label>Price</label>
            <input
              type="number"
              name="price"
              className="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />

            <label>Stock</label>
            <input
              type="number"
              name="stock"
              className="stock"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
            />
          </div>

          <label>Category</label>
            <select
              name="category"
              className="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="sofa">Sofa</option>
              <option value="table">Table</option>
              <option value="bed">Bed</option>
              <option value="chair">Chair</option>
            </select>

           {/* ADD ITEM IMAGE */}
           
          <label>Upload an Image</label>
            <input 
                type="file" 
                onChange={(e) => handleFileUpload(e)} 
                className="input addImage addItem"/>
          

          <label>Description</label>
            <input
              type="text"
              name="description"
              className="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
<br />
          <button type="submit" className="btn" >
            ADD
          </button>
          <button className="btn" onClick={closeHandler} >
            CLOSE
          </button>
        </form>
      </div>
  
        </>
    )
}