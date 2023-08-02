import { useState } from "react";
import SearchBar from "./componentFolder/SearchBar";
import ImageList from "./componentFolder/ImageList";
import searchImages from "./api";
import "./styleGeneral.css"

function App (){
   const [images ,setImages] = useState([]);


   const handleSubmit = async (term)=>{
    console.log("do a search a",term)
     const result = await searchImages(term);


      setImages(result);
    };

    
    return( 
        <body>
    <div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images}/>
    </div>
        </body>
    );
}

export default  App ; 
