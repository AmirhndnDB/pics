import axios from 'axios' ; 



const searchImages = async (term) =>{
  const response = await  axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID -hXmPj8uDd5SPuWtce9wcui1qKUa3Vt6VH0u2_PlB-k'
        } ,
        params:{
           query: term,
        }
    });

    return response.data.results ; 
}; 

export default searchImages ;