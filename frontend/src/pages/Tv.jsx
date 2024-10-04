// importing from installed packages 
import React, { useState } from "react";
import MoreMedia from "../components/MoreMedia";


// movie page
const Tv = () => {

    // initial page numbers 
    const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

    // useEffect(() => {
    //     const fetchTv = async () => {
    //         const api = await axios.get("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": import.meta.env.VITE_AUTHORISED},
    //             // withCredentials: false,
    //             // Access-Control-Allow-Credentials:true
        
    //             method:"get"
    //         });
            
    //         console.log(api.data)
    //         setTv(api.data.results)
    //     }
    //     fetchTv();
    // },[])


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
            <h1 className={headingStyle}>Explore Tv Shows </h1>
            {
                pageNumbers.map((currentPage, index) => (
                    <MoreMedia
                        key={index}
                        currentPage={currentPage}
                        mediaType={"tv"}
                    />
                ))
            }
            <button
                onClick={fetchNextPage}
                className="px-6 py-3 mb-10 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300">
                Load More
            </button>
        </div>
    );
};

export default Tv;
