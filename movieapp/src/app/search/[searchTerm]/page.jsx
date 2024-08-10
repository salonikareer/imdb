
import Results from "../../components/results";
import Image from "next/image"; 

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const pages = Number(params.page) || 1;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=80ef7da1544b33ed6200f0286940c377&query=${seachTerm}&language=en-US&page=${pages}&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length === 0 && <Image src="/404.svg" alt="loading..." width={500} height={500} className="mx-auto"/>}
      {results && <Results results={results} /> ||"no results found "}
      
    </div>
  );
}
