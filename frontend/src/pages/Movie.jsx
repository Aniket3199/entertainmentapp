// importing from installed packages 
import React, { useState,useEffect } from "react";
import MoreMedia from "../components/MoreMedia";
import axios from "axios"

// movie page
const Movie = () => {

    // initial page numbers 
    const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);
    const [movie,setMovie]=useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const api = await axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": import.meta.env.VITE_AUTHORISED},
                // withCredentials: false,
                // Access-Control-Allow-Credentials:true
        
                method:"get"
            });
            
            console.log(api.data)
            setMovie(api.data.results)
        }
        fetchMovies();
            
         
    },[])

    // Function to fetch next page data
    const fetchNextPage = () => {
        setPageNumbers(prevPageNumbers => [...prevPageNumbers, pageNumbers[pageNumbers.length - 1] + 1]);
    };

    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";


    // Render Movie media 
    return (
        <div className={containerStyle}>
            <h1 className={headingStyle}>Explore Movie</h1>
            <div className="grid grid-cols-5"></div>
            {/* <div class="grid grid-cols-4 gap-4">
                     <div>01</div>
  
                    <div>09</div>
                      </div> */}
            {
                movie.map((item)=>(
                    <div className=""></div>
                ))
                // pageNumbers.map((currentPage, index) => (
                //     <MoreMedia
                //         key={index}
                //         currentPage={currentPage}
                //         mediaType={"movie"}
                //     />
                // ))
            }
            <button
                onClick={fetchNextPage}
                className="px-6 py-3 mb-10 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300">
                Load More
            </button>
        </div>
    );
};

export default Movie;
