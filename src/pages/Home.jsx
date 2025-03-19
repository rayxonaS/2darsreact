import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Home() {
  const [limit, setLimit] = useState(30);
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/product?limit=" + limit
  );

  const changeLimit = () => {
    const maxLimit = 194;
    const minLimit = 30;

    if (limit < maxLimit) {
      if (limit == 180) {
        setLimit((prev) => prev + 14);
      } else {
        setLimit((prev) => prev + 30);
      }
    }
  };
  return (
    <section>
      {data && (
        <>
          <ul className="grid grid-cols-4 grid-rows-4  p-4 gap-4 justify-between">
            {data.products.map((product) => {
              return (
                <li
                  className="card bg-amber-200 image-full w-96 shadow-sm"
                  key={product.id}
                >
                  <figure>
                    <img src={product.thumbnail} alt={product.title} />
                  </figure>
                  <Link
                    className="card-body gap-4"
                    to={`/product/${product.id}`}
                  >
                    <h2 className="card-title font-mono text-xl">
                      {product.title}
                    </h2>
                    <p className="font-mono">{product.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-ghost font-mono text-xl">
                        Buy Now
                      </button>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="card-actions justify-end">
            <button
              className="btn btn-dash btn-info mt-5 text-xl font-mono"
              onClick={changeLimit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-[1.2em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Show more
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
