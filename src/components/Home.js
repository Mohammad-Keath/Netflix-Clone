import MovieList from "./MovieList"
import axios from "axios"
import { useEffect, useState } from "react";

function Home (){
    const [moviesData,setMoviesData]=useState([])
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_SERVER_URL}trending`
        const result = await axios(serverURL)
        setMoviesData (result.data)

    }
    useEffect(() =>{
        sendReq();
    },[]);
    return(
        <>
        <MovieList moviesData={moviesData}/>
      </>
)
}
export default Home