"use client"
import Results from "./components/results";

 import { useState } from "react";


const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  
const[currentPage, setCurrentPage] = useState(1);
const[showPages, setShowPages] = useState(5);

  const genre = searchParams.genre || 'fetchTrending';
  //const pages =Number( searchParams.page) || 1;
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=80ef7da1544b33ed6200f0286940c377&language=en-US&page=${currentPage}`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;
  console.log("results", results)
  
  const PageNumber = Math.ceil(results.length / showPages);
  const pages = [];
  for (let i = 1; i <= PageNumber; i++) {
    pages.push(i);
  }
   console.log("pages", pages)
   
    const handlePrevpage =() =>{
      if(currentPage > 1){
        setCurrentPage(currentPage - 1);
      }
    }
  return (
    <div>
      <Results results={results} />
      <div className="flex justify-center items-center space-x-5 ">
        <button onClick={handlePrevpage}>Previous</button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className="hover:text-amber-600"
          >
            {page}
          </button>
        ))}
        <button 
        onClick={() => setCurrentPage(currentPage + 1)}
        >Next</button>
      </div>
    </div>
  );
}
