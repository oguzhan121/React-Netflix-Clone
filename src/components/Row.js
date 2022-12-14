import React, { useEffect, useState } from "react";
import sendRequest from '../helper/service';
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';

const Row = ({title,fetchURL,rowID}) => {
    const [movies,setMovies] = useState([])
   
    useEffect(() => {
        sendRequest.get(fetchURL)
        .then((res) => {
          setMovies(res.results);

        })
        .catch((e) => {
          console.log('error', e)
        })
    },[fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} className="bg-white text-black rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
                <div id={'slider'+rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((item,id) =>(
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className="bg-white text-black rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
            </div>
        </>
    )
}

export default Row;