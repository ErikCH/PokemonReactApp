import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home({ pokemon: { results } }) {
  useEffect(() => {}, [results]);
  console.log(results);
  return (
    <div className="mt-10 p-4 flex flex-wrap">
      {results &&
        results.map((val, idx) => (
          <div className="ml-4 text-2xl text-blue-400" key={idx}>
            <Link to={`/about/${idx + 1}`}>{val.name}</Link>
          </div>
        ))}
    </div>
  );
}
