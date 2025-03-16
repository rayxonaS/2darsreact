import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: products,
    error,
    isPending,
  } = useFetch("https://dummyjson.com/product");

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  if (isPending) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mt-5 mb-5 font-bold text-3xl text-center">Products:</h1>
      <ul className="grid grid-cols-4  gap-6">
        {products &&
          products.map((p) => {
            return (
              <li
                key={p.id}
                className="bg-amber-50 border rounded-lg shadow-md p-4 flex flex-col items-center group"
              >
                <img
                  className="transition duration-300 group-hover:scale-[1.1]"
                  src={p.thumbnail}
                  alt={p.title}
                />
                <div className="text-center">
                  <span className="font-bold block text-lg mt-2">
                    {p.title}
                  </span>
                  <span className="text-green-600 font-medium text-xl">
                    $ {p.price}
                  </span>
                  <span className="text-gray-500  line-clamp-2 font-semibold">
                    {p.description}
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
