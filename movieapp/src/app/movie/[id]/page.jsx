import Image from "next/image";
import React from "react";

async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  // console.log("data", data)
  return (
    <div className="pt-4 w-full h-full">
      <div className=" px-8 py-6 flex flex-row lg:flex:col content-center max-w-6xl mx-auto gap-10 md:space-x-2 border shadow-md rounded-md dark:text-white dark:bg-gray-200">
        <div className="w-[20%] rounded-lg shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              data.poster_path || data.backdrop_path
            }`}
            width={500}
            height={300}
            alt={data.title}
            className="rounded-lg"
            style={{ height: "320px", width: "230px" }}
          />
        </div>
        <div className="w-[80%] space-y-6">
          <h2 className="text-lg mb-3 font-bold">{data.title}</h2>
          <p className="text-lg mb-3 text-balance">{data.overview}</p>
          <div>
            <p>
              <span className="font-semibold mr-1">Date Released:</span>{" "}
              {data.release_date || data.first_air_date}
            </p>
            <p>
              <span className="font-semibold mr-1">Rating:</span>
              {data.vote_average || data.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
