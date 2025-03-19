import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    error,
    isPending,
  } = useFetch("https://dummyjson.com/product/" + id);
  return (
    <section>
      {isPending && <h2>Loading...</h2>}
      <div>
        {product && (
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure className="bg-amber-100 p-4 rounded-lg">
              <img
                className="rounded-lg w-full h-auto object-cover"
                src={product.thumbnail}
                alt="Album"
              />
            </figure>
            <div className="card-body max-w-3xl">
              <h2 className="card-title text-xl font-mono">{product.title}</h2>
              <p className="text-xl font-mono">{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary font-mono">
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Product;
